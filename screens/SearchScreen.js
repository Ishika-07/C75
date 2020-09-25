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
        search:''
      }
    }
  /*   componentDidMount=async()=>{
      const story = await db.collection('stories').limit(10).get();
      story.docs.map((doc)=>{
       this.setState({
         allStories:[...this.state.allStories,doc.data()],
         lastVisibleStory: doc
       })
     })
    } */
    fetchMoreTransactions=async()=>{
      const story = await db.collection('stories').where('name',"==",this.state.search).startAfter(this.state.lastVisibleStory).limit(10).get();
      story.docs.map((doc)=>{
       this.setState({
         allStories:[...this.state.allStories,doc.data()],
         lastVisibleStory: doc,
         search:text
       })
     })
    }
    
    searchStory=async(text)=>{
       const story = await db.collection('stories').where('name',"==",text).get();
       story.docs.map((doc)=>{
        this.setState({
          allStories:[...this.state.allStories,doc.data()],
          lastVisibleStory: doc,
          search:text
        })
      })
    }
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#DDBBFF'  }}>
        <KeyboardAvoidingView>
          <ScrollView>
         <View >
         <AppHeader/>
         </View>
         <View>

          <SearchBar
          round
          style={styles.input}
          placeholder="Search here......"
          onChangeText={(text)=>{
            this.setState({search:text})
            this.searchStory(this.state.search)
         
          }}
          onClear={()=>{
            this.setState({search:''})
            this.searchStory(this.state.search)
           
          }}
          value={this.state.search}
         
      />
            <FlatList
              data={this.state.allStories}
              renderItem={({item})=>(
                <View style={{borderBottomWidth: 2}}>
                  <Text>{'Story_id: ' + item.story_id}</Text>
                  <Text>{'Story Name: ' + item.name}</Text>
                  <Text>{'Story Author: ' + item.author}</Text>
                  <Text>{'Story: ' + item.story}</Text>
                </View>
              )  
              }
              keyExtractor= {(item, index)=> index.toString()}
              onEndReached ={this.fetchMoreTransactions}
              onEndReachedThreshold={0.7}
            />
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
        marginTop:50
          },
      input:{
        width:560,
        height:0.1
        },
      
  })