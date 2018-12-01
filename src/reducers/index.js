import {combineReducers} from "redux"

import nav from "./navReducer"
import user from "./userReducer"

const rootReducer = combineReducers({nav, user})

export default rootReducer
