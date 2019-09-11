import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'

import data from '../data/cats'

import ImageListItem from './ImageListItem'

export default class ImageList extends Component {
  render () {
    return (
      <ScrollView contentContainerStyle={styles.layout}>
        {data.cats.map(cat => (
          <ImageListItem
            key={cat.id}
            url={cat.url}
          />
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})

// play with the index values to adapt behaviour
// and styles - flexbox order