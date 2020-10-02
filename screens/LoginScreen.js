import React from 'react';
import { Text, View,TouchableOpacity,StyleSheet, KeyboardAvoidingView ,TextInput, Image} from 'react-native';
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }
    login = async(id, password)=>{
        if(id && password){
            
            try{ 
                const response = await firebase.auth().signInWithEmailAndPassword(id, password);
                
                if (response){
                    this.props.navigation.navigate('WriteStory')
                }
            }
            catch(error){
                switch (error.code) {
                    case 'auth/user-not-found':
                      alert("user dosen't exists")
                      console.log("doesn't exist")
                      break
                    case 'auth/invalid-email':
                      alert('incorrect email or password')
                      console.log('invaild')
                      break
                    default:
                        alert('incorrect email or password')
                        break;
                  }
            }
            
        }
        else{
            alert('Enter email and password')  
        }
    }
    render(){
        return(
            <View style={{backgroundColor:'lightblue'}}>
            <KeyboardAvoidingView style = {{alignItems:'center',marginTop:20, backgroundColor:'lightblue'}}>
            <Image
             source={require("../assets/rabbit.jpg")}
               style={{marginTop:100,width:350, height:350, marginBOttom:50}}
      />
                <View style={{alignItems:'center', justifyContent: 'center',colr:'darkblue'}}>
                    <Text style={{textAlign: 'center', fontSize: 30, color:'whiteSmoke'}}></Text>
                </View>

                <View >
                    <TextInput 
                    style={styles.loginBox} 
                    placeholder='abc@gmail.com'
                    keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({
                            emailId: text
                        })
                    }}
                    />
                    
                    <TextInput 
                    style={styles.loginBox}
                    placeholder='Enter Password'
                    secureTextEntry={true}
                    onChangeText={(text)=>{
                        this.setState({
                            password: text
                        })
                    }}
                    />
                </View>

                <View>
                    <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7, backgroundColor:'darkblue'}}
                    onPress={()=>{
                      this.login(this.state.emailId, this.state.password)  
                    }}>
                        <Text style={styles.text}>Log In</Text>
                    </TouchableOpacity>  
                </View>
                
            </KeyboardAvoidingView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    loginBox: {
      width: 300,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    margin:10,
    paddingLeft:10,
    borderRadius:2,
    boxShadow:'2px 2px ',
    color:'darkblue'
    },
    text:{
        textAlign:'center',
        color:'white'
    },
  })
 