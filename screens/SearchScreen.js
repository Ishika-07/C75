import React from 'react';
import { Text, View,TouchableOpacity,TextInput,StyleSheet, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../components/appHeader'
import{Icon, SearchBar} from 'react-native-elements'
import { FlatList } from 'react-native';
import db from '../config'
import { ScrollView } from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
    constructor(){
      super();
      this.state={
        allStories:[],
        lastVisibleStory:null,
        search:'',
        showFlatlist:false
      }
    }

    fetchMoreTransactions=async()=>{
      const story = await db.collection('stories').where('name',"==",this.state.search).startAfter(this.state.lastVisibleStory).limit(10).get();
      story.docs.map((doc)=>{
       this.setState({
         allStories:[...this.state.allStories,doc.data()],
         lastVisibleStory: doc,
       })
     })
    }
    
    searchStory=async(text)=>{
      this.setState({ 
              search:text, 
              allStories:[]
      })
      
        const story = await db.collection('stories').where('name',"==",text).get();
        story.docs.map((doc)=>{
         this.setState({
           allStories:[...this.state.allStories,doc.data()],
           lastVisibleStory: doc, 
           showFlatlist:true
         })
       })
      

    }
    render() {
      return (
        <View style={{ flex: 1,backgroundColor:'#DDBBFF'  }}>
        <KeyboardAvoidingView>
          <ScrollView>
         <View >
         <AppHeader/>
         </View>
         <Text style={styles.text}>Search your story here</Text>
         <View style={styles.search}>
          <SearchBar
          round
          style={styles.input}
          placeholder="Search here......"
          onChangeText={(text)=>{           
            this.searchStory(text)
         
          }}
          onClear={()=>{
            this.searchStory("")
           
          }}
          value={this.state.search}
         
      />
   
      {console.log(this.state.allStories)}
      
          {
            this.state.showFlatlist === true 
            ?(<FlatList
                data={this.state.allStories}
                renderItem={({item})=>(
                  <View style={{borderBottomWidth: 2, borderColor:"white", alignItems: "center"}}>
                    <Text style={styles.story}>{'Story_id: ' + item.story_id}</Text>
                    <Text style={styles.story}>{'Story Name: ' + item.name}</Text>
                    <Text style={styles.story}>{'Story Author: ' + item.author}</Text>
                    <Text style={styles.story}>{'Date: ' + item.date}</Text>                    
                  </View>
                )  
                }
                keyExtractor= {(item, index)=> index.toString()}
                onEndReached ={this.fetchMoreTransactions}
                onEndReachedThreshold={0.7}
                
              />)
              :(
             null
              )
       }
             </View>
        </ScrollView>
        </KeyboardAvoidingView>
        </View>
      );
    }
  }

  const styles =StyleSheet.create({
      text:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:50,
        textAlign:'center'
          },
      input:{
        backgroundColor:"whitesmoke",
        textAlign:'center'
        },
      search:{
        marginTop:50,
        width:'60%',
        alignSelf:'center',
        borderRadius: 20,
        backgroundColor:"#472668"
      },
      story:{
        color:'white'
      }
  })