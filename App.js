import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import StoryScreen from './screens/StoryWritingScreen';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component {
  render(){
    return (
    
        < AppContainer /> 

    )
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: {screen: StoryScreen},
  ReadStory: {screen: SearchScreen},

},
{
defaultNavigationOptions:({navigation})=>({
  tabBarIcon:()=>{
    const routeName = navigation.state.routeName;
    if(routeName==='ReadStory'){
      return(

        <Image
        source={require("./assets/read.png")}
        style={{width:40, height:40}}
      />
      )
    }else if(routeName==='WriteStory'){
      return(

        <Image
        source={require("./assets/write.png")}
        style={{width:40, height:40}}
      />
      )
    }

  }
})

});
const switchNavigator = createSwitchNavigator({
  LoginScreen : {screen:LoginScreen},
  TabNavigator: {screen: TabNavigator}
})
const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#DDBBFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
