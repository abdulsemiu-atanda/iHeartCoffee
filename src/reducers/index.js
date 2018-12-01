import {combineReducers} from "redux"

import coffee from "./coffeeSpotsReducer"
import nav from "./navReducer"
import reviews from "./reviewsReducer"
import user from "./userReducer"

const rootReducer = combineReducers({coffee, nav, reviews, user})

export default rootReducer
