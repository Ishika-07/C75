import React from 'react';
import { Text, View,TouchableOpacity,TextInput,StyleSheet } from 'react-native';
import AppHeader from '../components/appHeader'

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <View >
         <AppHeader/>
         </View>
         <View>

          <Text style={styles.text}>Search The Story You Want To Read Over Here</Text>
          <TextInput style={styles.input}/>

          <TouchableOpacity style={styles.button}>
            <Text  style={styles.buttonText}>Search </Text>
            </TouchableOpacity>
            </View>
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
        width:500,
         height:50,
         borderWidth:2,
         marginTop:20
        },
        button:{
        backgroundColor:'pink',
        width:100,
        height:40,
        borderWidth:2,
        borderRadius:10,
        marginTop:10,
        justifyContent:'center',
        alignContent:'center',
        marginLeft:200,
        marginBottom:400},
        buttonText:{
          fontSize:15,
          fontWeight:'bold',
          marginLeft:25
        }
  })