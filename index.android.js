/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  NativeModules
} from 'react-native';

const {ToastModule} = NativeModules;
console.log(ToastModule);
export default class ToastAndroid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <TouchableOpacity onPress={()=>this.showToast('hello world long', ToastModule.long)}>
          <Text>Show Hello world long</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showToast('hello world short', ToastModule.long)}>
          <Text>Show Hello world short</Text>
        </TouchableOpacity>
      </View>
    );
  }
  showToast(message, duration){
    ToastModule.show(message, duration);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ToastAndroid', () => ToastAndroid);
