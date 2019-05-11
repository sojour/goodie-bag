import axios from 'axios'

const GOT_CANDIES = 'GOT_CANDIES'
//const GET_CANDIES = 'GET_CANDIES'

export const gotCandies = (candies) => ({
  type: GOT_CANDIES,
  candies
})

export const getCandies = () => {
  return async function (dispatch) {
    const { data } = await axios.get('/api')
    dispatch(gotCandies(data))
  }
}


const initialState = {
  candies: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CANDIES:
      return { ...state, candies: action.candies }
    default:
      return state
  }
}

export default rootReducer
