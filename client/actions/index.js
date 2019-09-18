export const REQUEST_IMAGES = 'REQUEST_IMAGES'
export const IS_LARGE = 'IS_LARGE'

// return a list of images from the database
export const requestImages = (images) => {
  return {
    type: REQUEST_IMAGES,
    images: images
  }
}

// determine whether an image displays as large or not
export const isLarge = () => {
  return {
    type: IS_LARGE,
    isLarge
  }
}
