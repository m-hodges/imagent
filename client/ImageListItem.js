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
      onPress={() => {this.pressHandler()}}
      style={
        (!this.state.isLarge) 
          ? styles.imageContainer 
          : styles.largeImageContainer
        } 
      >
        <ImageBanner isLarge={this.state.isLarge} name={this.props.name}/>
        <Image 
          source={{uri: this.props.url}} 
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


// (this.props.index % 2 !== 0 && !this.state.isLarge)
// ? {order: this.props.index - 1}
// : {order: this.props.index}

//flip flex direction?