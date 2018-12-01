import {combineReducers} from "redux"

import coffee from "./coffeeSpotsReducer"
import nav from "./navReducer"
import user from "./userReducer"

const rootReducer = combineReducers({coffee, nav, user})

export default rootReducer
