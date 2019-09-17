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

  pressHandler (evt) {
    this.setState({
      isLarge: !this.state.isLarge
    })
    this.props.flipFlexDirection(this.props.index)
  }

  render () {
    return (
      <TouchableOpacity 
      onPress={(evt) => {this.pressHandler(evt)}}
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