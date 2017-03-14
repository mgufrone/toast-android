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
import TextAndroid from './TextAndroid';
export default class ToastAndroid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello WOrld</Text>
        <TextAndroid text={"Hello World"} />
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
