import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header, Icon} from 'react-native-elements'


export default class AppHeader extends React.Component {
    render() {
      return (
<Header 
leftComponent={<Icon name='bed' type='font-awesome' color='white' />}
backgroundColor={'#472668'}
centerComponent={{
  text: 'Bedtime Stories',
  style:{
    color:'white',
    marginLeft:200,
    marginRight:200,
    marginTop:10,
    fontWeight:'bold',
    fontSize:30,

  }
}}/>
);
}
}