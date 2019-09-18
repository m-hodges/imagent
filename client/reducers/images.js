import {
  REQUEST_IMAGES,
  IS_LARGE
} from '../actions'

const initialSate = {
  images: ['There are no current images!'],
  isLarge: false
}

const imagesReducer = (state = initialSate, action) => {
  switch (action.type) {
    case REQUEST_IMAGES:
      return action.images
    case IS_LARGE:
      return Object.assign(
        {},
        state,
        {
          ...state,
          isLarge: !action.isLarge
        })
    default:
      return state
  }
}

export default imagesReducer
