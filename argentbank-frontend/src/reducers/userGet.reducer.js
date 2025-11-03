import { USER_GET } from "../actions/userGet.action"
import { LOGOUT_USER } from "../actions/logOutUser.action"

const initialState = {}

export default function logInPostReducer(state = initialState, action) {
    switch (action.type) {
        case USER_GET:
            return { ...state, ...action.payload }
        case LOGOUT_USER:
            return initialState
        default:
            return state
    }
}
