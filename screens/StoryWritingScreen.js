import React from 'react';
import { Text, View, TextInput,TouchableOpacity } from 'react-native';

export default class StoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text  style={{fontSize:20,fontWeight:'bold'}}> Write Your Story Here</Text>

          <Text style={{fontSize:15,fontWeight:'bold',marginTop:50}}>Story's name</Text>
          <TextInput style={{width:500, height:30,borderWidth:2,}}/>
          <Text style={{fontSize:15,fontWeight:'bold',marginTop:20}}>Author</Text>
          <TextInput style={{width:500, height:30,borderWidth:2,}}/>
          <Text style={{fontSize:15,fontWeight:'bold',marginTop:20}}>Story</Text>
          <TextInput style={{width:500, height:300,borderWidth:2,}}/>

          <TouchableOpacity  style={{backgroundColor:'pink',width:100,height:40,borderWidth:2,borderRadius:10,marginTop:10,justifyContent:'center',alignContent:'center'}}>
            <Text  style={{fontSize:15,fontWeight:'bold',marginLeft:25}}>Submit</Text>
            </TouchableOpacity>
        </View>
      );
    }
  }
