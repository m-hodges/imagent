import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  red: {
    color: 'red'
  },
  bigText: {
    fontSize: 30
  }
})

export default class HelloWorld extends Component {
  render () {
    return (
      <View>
        <Text style={[styles.red, styles.bigText]}>Sup, world!</Text>
      </View>
    );
  }
}