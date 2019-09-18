import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  StyleSheet
} from 'react-native'

import data from '../data/cats'

import ImageListItem from './ImageListItem'

class ImageList extends Component {
  render () {
    return (
      <ScrollView contentContainerStyle={ styles.layout }>
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

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(ImageList)

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
})
