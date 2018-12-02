import {COFFEE_SPOT} from "../actionTypes/userConstants"
import {asyncActionNames} from "../util/asyncUtils"

const initiallState = {spots: [], loading: false, error: {message: "", status: false}}

const coffeeSpotsReducer = (state = initiallState, action) => {
  switch (action.type) {
    case asyncActionNames(COFFEE_SPOT).loading:
      return {...state, loading: action.data}
    case asyncActionNames(COFFEE_SPOT).failure:
      return {...state, error: action.data}
    case asyncActionNames(COFFEE_SPOT).success:
      return {...state, spots: action.data.businesses}
    default:
      return state
  }
}

export default coffeeSpotsReducer
