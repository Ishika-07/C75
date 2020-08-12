import React from 'react';
import { Text, View, TextInput,TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/appHeader'

export default class StoryScreen extends React.Component {
    render() {
      return (
       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
           <AppHeader/>
           <View>
          <Text  style={styles.text}> Write Your Story Here</Text>

          <Text style={styles.title}>Story's name</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.titleText}>Author</Text>
          <TextInput style={styles.input}/>

          <Text style={styles.titleText}>Story</Text>
          <TextInput style={styles.inputBox}/>

          <TouchableOpacity  style={styles.button}>
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

  
