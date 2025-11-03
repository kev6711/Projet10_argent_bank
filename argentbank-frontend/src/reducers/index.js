import { combineReducers } from "@reduxjs/toolkit"
import logInPostReducer from "./logInPost.reducer"
import userGetReducer from "./userGet.reducer"

export default combineReducers({
    logInPostReducer,
    userGetReducer,
})
