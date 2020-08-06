import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'


export default class AppHeader extends React.Component {
    render() {
      return (
<Header 
backgroundColor={'pink'}
centerComponent={{
  text: 'Bedtime Stories',
  style:{
    color:'white'
  }
}}/>
);
}
}