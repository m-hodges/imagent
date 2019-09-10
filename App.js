import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  Text
} from 'react-native'

import Header from './client/Header'
import ImageList from './client/ImageList'

const width = Dimensions.get('window').width

export default function App () {
  return (
    <View style={styles.container}>
      <View style={[styles.header, styles.width]}>
        <Header />
      </View>
      <View style={[styles.body, styles.width]}>
        <ImageList />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  width: {
    width: width
  },
  container: {
    flex: 1,
    width: width,
    backgroundColor: 'black',
    paddingTop: Expo.Constants.statusBarHeight
  },
  header: {
    flex: 1,
    backgroundColor: 'gray',
    height: 50,
    padding: 10
  },
  body: {
    flex: 6,
    backgroundColor: '#383838',
    height: 500,
    paddingTop: 10,
    paddingBottom: 10
  }
})
