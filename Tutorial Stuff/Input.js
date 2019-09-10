import React, { Component } from 'react'
import { TextInput, View } from 'react-native'

export default class Input extends Component {
  state = {
    text: ''
  }

  // textHandler (text) {
  //   this.setState(
  //     {
  //       text: text
  //     }
  //   )
  // }

  render () {
    return (
      <View >
        <TextInput 
          style={{height: 40, width: 250, backgroundColor: 'white'}}
          placeholder='type here!'  
        />
      </View>
    )
  }
}