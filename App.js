import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/App';

export default class App extends React.Component {
  render() {
    return (
      <View style={{paddingTop:45,flex:1}}>
        <Main/>
      </View>
    );
  }
}

