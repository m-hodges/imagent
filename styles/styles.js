import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  imageContainer: {
    width: 190,
    height: 190,
    borderRadius: 10,
    margin: 5,
    position: 'relative'
  },
  largeImageContainer: {
    width: 390,
    height: 390,
    borderRadius: 10,
    margin: 5,
    position: 'relative'
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
  },
  imageBannerContainer: {
    width: 190,
    height: 30,
    backgroundColor: 'gray',
    opacity: 0.75,
    position: 'absolute',
    zIndex: 999,
    top: 190 - 30,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center'
  },
  largeImageBannerContainer: {
    width: 390,
    height: 60,
    backgroundColor: 'gray',
    opacity: 0.75,
    position: 'absolute',
    zIndex: 999,
    top: 390 - 60,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center'
  }
})
