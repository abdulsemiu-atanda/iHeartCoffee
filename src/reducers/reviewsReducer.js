import {COFFEE_SPOT_REVIEWS} from "../actionTypes/userConstants"
import {asyncActionNames} from "../util/asyncUtils"

const initialState = {spotReviews: {}, loading: false, error: {error: "", status: false}}

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionNames(COFFEE_SPOT_REVIEWS).loading:
      return {...state, loading: action.data}
    case asyncActionNames(COFFEE_SPOT_REVIEWS).failure:
      return {...state, error: action.data}
    case asyncActionNames(COFFEE_SPOT_REVIEWS).success:
      return {
        ...state,
        spotReviews: {...state.spotReviews, [action.data.id]: action.data.reviews}
      }
    default:
      return state
  }
}

export default reviewsReducer
