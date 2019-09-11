import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import styles from '../styles/styles'

export default class ImageBanner extends Component {
  render () {
    return (
      <View style={(!this.props.isLarge) ? styles.imageBannerContainer : styles.largeImageBannerContainer}>
        <Text style={localStyles.text}>
          Hi
        </Text>
      </View>
    )
  }
}

const localStyles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 8
  }
})
