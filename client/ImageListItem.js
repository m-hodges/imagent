import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity
} from 'react-native'

import ImageBanner from './ImageBanner'
import styles from '../styles/styles'

export default class ImageListItem extends Component {
  state = {
    isLarge: false
  }

  pressHandler () {
    this.setState({
      isLarge: !this.state.isLarge
    })
  }

  render () {
    return (
      <TouchableOpacity
        onPress={() => { this.pressHandler() }}
        style={
          (!this.state.isLarge)
            ? styles.imageContainer
            : styles.largeImageContainer
        }
      >
        <ImageBanner isLarge={ this.state.isLarge } name={ this.props.name }/>
        <Image
          source={{ uri: this.props.url }}
          style={
            (!this.state.isLarge)
              ? styles.image
              : styles.largeImage
          }
        />
      </TouchableOpacity>
    )
  }
}

// make it so only one image can be large
// if islarge is already true, minimize all other images
// then maximize current image
// how do i miminize a previous image based on the state change of a latter image?

// pass largeImageIndicator to parent component, and change state to largeImage
// if largeImageIndicator in parent component is true, change state of all other
// images to small, then change current image to largeImage
