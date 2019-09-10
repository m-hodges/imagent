import React from 'react'
import { 
  Image,
  StyleSheet,
  TouchableOpacity
 } from 'react-native'

function pressHandler (evt) {
    // alert('hi')
    console.log(evt)
    // evt.Image.style = {
    //   width: 400,
    //   height: 400
    // }
  }

const ImageListItem = (props) => {
  return (
    <TouchableOpacity 
      onPress={(evt) => {pressHandler(evt)}}
      style={styles.touchableContainer}
      >
      <Image 
        source={{uri: props.url}} 
        style={styles.imageContainer}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  touchableContainer: {
    width: 190,
    height: 190,
    borderRadius: 10,
    margin: 5 
  },
  imageContainer: {
    width: 190,
    height: 190,
    borderRadius: 10
  },
  largeImageContainer: {
    width: 400,
    height: 400,
    borderRadius: 10
  }
})

export default ImageListItem


//state, default isLarge: false, onclick isLarge: !isLarge
//image, style if isLarge:false - imageContainer, style if 
//isLarge: true, -largeImageContainer