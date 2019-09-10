import React, { Component } from 'react'
import { 
  Image,
  StyleSheet,
  TouchableOpacity
 } from 'react-native'

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
      style={(!this.state.isLarge) ? styles.imageContainer : styles.largeImageContainer}
      >
        <Image 
          source={{uri: this.props.url}} 
          style={(!this.state.isLarge) ? styles.image : styles.largeImage}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    width: 190,
    height: 190,
    borderRadius: 10,
    margin: 5 
  },
  largeImageContainer: {
    width: 390,
    height: 390,
    borderRadius: 10,
    margin: 5
  },
  image: {
    width: 190,
    height: 190,
    borderRadius: 10
  },
  largeImage: {
    width: 390,
    height: 390,
    borderRadius: 10
  }
})

//reveal component when isLarge is true
//component is positioned on top of the image
//absolute positioning minus its height
//or top: height of image - height of component