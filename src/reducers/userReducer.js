import {ADD_USER} from "../actionTypes/userConstants"
import {asyncActionNames} from "../util/asyncUtils"

const initialState = {error: {error: "", status: false}, fullname: "Robot Pike", loading: false}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionNames(ADD_USER).loading:
      return {...state, loading: action.data}
    case asyncActionNames(ADD_USER).failure:
      return {...state, error: action.data}
    case asyncActionNames(ADD_USER).success:
      return {...state, fullname: action.data}
    default:
      return state
  }
}

export default userReducer
