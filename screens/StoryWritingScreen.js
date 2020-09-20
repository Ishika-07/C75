import React from 'react';
import { Text, View, TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/appHeader'
import db from '../config'
import firebase from 'firebase';

export default class StoryScreen extends React.Component {
constructor(){
  super();
  this.state={
    
    text : '',
    author: '',
    story:''
  }
}

  submitStory=async(name, story, author)=>{
    db.collection("stories").add({
      "story": story,
      "author":author,
      "name":name
    })
    this.setState({
      name:'',
      author:'',
      story:''
    })
    return alert('Story succesfully submitted')
  }
  
    render() {
      return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
           <AppHeader/>
           <View>
          <Text  style={styles.text}> Write Your Story Here</Text>

          <Text style={styles.title}>Story's name</Text>
          <TextInput style={styles.input}
          onChangeText={(text)=>{
            this.setState({
              name:text
            })
          }}
          value={this.state.name}
          />

          <Text style={styles.titleText}>Author</Text>
          <TextInput style={styles.input} 
            onChangeText={(text)=>{
              this.setState({
                author:text
              })
            }}
            value={this.state.author}
          />

          <Text style={styles.titleText}>Story</Text>
          <TextInput style={styles.inputBox} 
            onChangeText={(text)=>{
              this.setState({
                story:text
              })
            }}
            value={this.state.story}
            multiline
          />

          <TouchableOpacity  style={styles.button} onPress={()=>{
            this.submitStory(this.state.name, this.state.story, this.state.author)}}>
            <Text  style={styles.buttonText}>Submit</Text>
            </TouchableOpacity> 
            </View> 
        </View>
      );
    }
  }
  const styles =StyleSheet.create({
    text:{fontSize:20,
       fontWeight:'bold'
    },
    title:{fontSize:15,
      fontWeight:'bold',
      marginTop:50
    },
    titleText:{fontSize:15,
      fontWeight:'bold',
      marginTop:20
    },
    input:{width:500,
       height:30,
       borderWidth:2,
      },
      inputBox:{width:500, 
        height:300,
        borderWidth:2,
      },
      button:{backgroundColor:'pink',width:100,height:40,borderWidth:2,
      borderRadius:10,
      marginTop:10,
      justifyContent:'center',
      alignContent:'center',
      marginLeft:200
    },
    buttonText:{fontSize:15,
      fontWeight:'bold',
      marginLeft:25
    }
  })

  
