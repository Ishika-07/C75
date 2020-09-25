import React from 'react';
import { Text, View,TouchableOpacity,TextInput,StyleSheet, KeyboardAvoidingView } from 'react-native';
import AppHeader from '../components/appHeader'
import{Icon, SearchBar} from 'react-native-elements'

export default class Searchscreen extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#DDBBFF'  }}>
         <View >
         <AppHeader/>
         </View>
         <View>

          <SearchBar
          style={styles.input}
        placeholder="Search here......"
        onChangeText={this.updateSearch}
        
      />

          <TouchableOpacity style={styles.button}>
            <Text  style={styles.buttonText}>Search </Text>
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
        marginTop:50
          },
      input:{
        width:560,
        height:0.1
        },
        button:{
        backgroundColor:'#472668',
        width:100,
        height:40,
        borderWidth:2,
        borderRadius:10,
        marginTop:10,
        margin:100,
        justifyContent:'center',
        alignContent:'center',
        marginLeft:200,
        boxShadow:'5px 5px',
        marginBottom:400},
        buttonText:{
          fontSize:15,
          fontWeight:'bold',
          marginLeft:25
        }
  })