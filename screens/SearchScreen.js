import React from 'react';
import { Text, View,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Search The Story You Want To Read Over Here</Text>
          <TextInput style={{width:500, height:300,borderWidth:2,}}/>

          <TouchableOpacity style={{backgroundColor:'pink',width:100,height:40,borderWidth:2,borderRadius:10,marginTop:10,justifyContent:'center',alignContent:'center'}}>
            <Text  style={{fontSize:15,fontWeight:'bold',marginLeft:25}}>Search </Text>
            </TouchableOpacity>
        </View>
      );
    }
  }