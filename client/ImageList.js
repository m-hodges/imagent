import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet
} from 'react-native'

import data from '../data/cats'

import ImageListItem from './ImageListItem'

export default class ImageList extends Component {
  state = {
    flipFlexDirection: false
  }

  flipFlexDirection = (index) => {
    if (this.state.flipFlexDirection === false) {
      (index % 2 !== 0)
      ? this.setState({
        flipFlexDirection: true
      })
      : null
    } else {
      (index % 2 === 0)
      ? this.setState({
        flipFlexDirection: false
      })
      : null
    }
  }

  render () {
    return (
      <ScrollView contentContainerStyle={
        [
          styles.layout,
          (this.state.flipFlexDirection)
            ? styles.altLayout
            : styles.reverseAltLayout
        ]}>
        {data.cats.map((cat, i) => (
          <ImageListItem
            key={cat.id}
            name={cat.name}
            url={cat.url}
            index={i}
            flipFlexDirection={this.flipFlexDirection}
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
  },
  altLayout: {
    flexDirection: 'row-reverse'
  },
  reverseAltLayout: {
    flexDirection: 'row'
  }
})
