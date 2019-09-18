import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {
  StyleSheet,
  View,
  Dimensions
} from 'react-native'

import Header from './client/Header'
import ImageList from './client/ImageList'
import reducer from './client/reducers'

const store = createStore(reducer)

const width = Dimensions.get('window').width

export default function App () {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <View style={[styles.header, styles.width]}>
          <Header />
        </View>
        <View style={[styles.body, styles.width]}>
          <ImageList />
        </View>
      </View>
    </Provider>
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
