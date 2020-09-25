import React from 'react';
import { Text, View, TextInput,TouchableOpacity, StyleSheet, KeyboardAvoidingView} from 'react-native';
import AppHeader from '../components/appHeader'
import { RFValue } from "react-native-responsive-fontsize";
import db from '../config'
import firebase from 'firebase';
import { Icon } from 'react-native-elements';



export default class StoryScreen extends React.Component {
constructor(){
  super();
  this.state={
    text : '',
    author: '',
    story:'',
    story_id:''
  }
}

  submitStory =async (name, story, author)=>{
    console.log(name+'##name##')
    db.collection("stories").add({
      "story": story,
      "author":author,
      "name":name,
      "story_id": Math.random().toString(36).substring(7)
    })
    this.setState({
      name:'',
      author:'',
      story:'',
      story_id:''
    })
    return alert("Story Succesfully Submitted") 
   
  }
  
    render() {
      return (
        <KeyboardAvoidingView>
       <View style={{padding:0.9 ,flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#DDBBFF' }}>
          
           <AppHeader/>
           <View>
          <Text  style={styles.text}><Icon name='edit' type='ant-design' color='black'/> Write Your Story Here</Text>

          <Text style={styles.title} > <Icon name='pencil-square-o' type='font-awesome' color='#472668'/> Name</Text>
          <TextInput style={styles.input}
          placeholder='Name your story'
          onChangeText={(text)=>{
            this.setState({
              name:text
            })
          }}
          value={this.state.name}
          />
            <Text style={styles.title} > <Icon name='user' type='font-awesome' color='#472668'/> Author</Text>
          <TextInput style={styles.input} 
          placeholder='Please let our users know the authors name'
            onChangeText={(text)=>{
              this.setState({
                author:text
              })
            }}
            value={this.state.author}
          />

            <Text style={styles.title} > <Icon name='pencil' type='font-awesome' color='#472668'/> Story</Text>
          <TextInput style={styles.inputBox} 
          placeholder='Please write your story here'
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
        </KeyboardAvoidingView>
      );
    }
  }
  const styles =StyleSheet.create({
    text:{
        fontSize:20,
       fontWeight:'bold',
       textAlign:'center',
       marginTop:RFValue(20),
       marginBottom:RFValue(10),
    },
    title:{fontSize:15,
      fontWeight:'bold',
      textAlign:'center'
      
    },
    titleText:{fontSize:15,
      fontWeight:'bold',
      
    },
    input:{
       width:500,
       height:40,
       borderWidth:2,
       borderRadius:20,
       borderColor:'#472668',
       boxShadow:'5px 5px',
       margin:10
      },
      inputBox:{
        width:500, 
        height:200,
        borderWidth:2,
        borderColor:'#472668',
        boxShadow:'5px 5px',
        borderRadius:10,
        margin:10
      },
      button:{
        backgroundColor:'#472668',
        width:100,
        height:40,
        borderWidth:2,
      borderRadius:10,
      marginTop:10,
      justifyContent:'center',
      alignContent:'center',
      marginLeft:200,
      boxShadow:'5px 5px '
    },
    buttonText:{fontSize:15,
      fontWeight:'bold',
      marginLeft:25
    }
  })

  
