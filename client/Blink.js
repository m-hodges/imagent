import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Blink extends Component {

  state = {
    isVisible: true
  }

  componentDidMount () {
    setInterval(() => {
      this.setState(currentState => (
        { isVisible: !currentState.isVisible}
      ))
    }, 100);
  }

  render () {
    return (!this.state.isVisible) ? null : <Text>{this.props.text}</Text>
  }

}