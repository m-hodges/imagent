import React, { Component } from 'react'
import { 
  TextInput, 
  StyleSheet, 
  Dimensions, 
  View 
} from 'react-native'

const width = Dimensions.get('window').width


export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textBox} placeholder=' Search' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textBox: {
    height: 35,
    width: width / 1.5,
    backgroundColor: 'white',
    fontSize: 20
  }
})