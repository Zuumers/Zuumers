export const addItemToCart = (n) => {
  return {
    type: 'ADD_ITEM',
    // n is payload !!
    payload: n
  }
}
export const removeItemFromCart = () => {
  return {
    type: 'REMOVE_ITEM'
  }
}

export const addProduct = (n) => {
  // console.log('hahahahah')
  return {
    type: 'ADD_PRODUCT',
    payload: n
  }
}

export const getProduct = () => {
  // console.log('hahahahah')
  return {
    type: 'GET_PRODUCT'
  }
}

export const getReviews = () => {
  // console.log('hahahahah')
  return {
    type: 'GET_REVIEWS'
  }
}


