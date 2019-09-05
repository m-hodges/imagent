import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Button,
  ScrollView,
  Image
} from 'react-native'

import HelloWorld from './client/HelloWorld'
import Blink from './client/Blink'
import Input from './client/Input'

const width = Dimensions.get('window').width
// const height = Dimensions.get('window').height

export default function App () {
  return (
    <View style={styles.container}>
      <View style={[styles.size, styles.container, { backgroundColor: 'blue' }]}>
        <Text>hi</Text>
        <Input />
        <Button
          onPress={() => {
            alert('You pressed the button! Goood Joooob')
          }}
          title="Touch me"
        />
      </View>
      <View style={[styles.size, styles.container, { backgroundColor: 'green', flex: 2 }]}>
        <HelloWorld />
        <ScrollView>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1559735171-cb4bcf580a22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80',
              width: width,
              height: 1000
            }}
          />
        </ScrollView>
      </View>
      <View style={[styles.size, styles.container, { backgroundColor: 'red', flex: 0.5 }]}>
        <Blink text="E P I L E P S Y" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  size: {
    width: width,
    height: 250
  }
})
