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
        {data.cats.map((cat, i) => (
          <ImageListItem
            key={cat.id}
            name={cat.name}
            url={cat.url}
            index={i}
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

// function to change flexdirection here
// pass it into imagelistitem
// in imagelistitem, if index is odd, execute function that was passed down
