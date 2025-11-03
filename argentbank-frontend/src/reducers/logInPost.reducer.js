import { LOGIN_POST } from "../actions/logInPost.action"
import { LOGOUT_USER } from "../actions/logOutUser.action"

const initialState = {}

export default function logInPostReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_POST:
            return { ...state, ...action.payload }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}
