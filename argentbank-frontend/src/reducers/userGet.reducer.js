import { USER_GET } from "../actions/userGet.action"
import { LOGOUT_USER } from "../actions/logOutUser.action"
import { USERNAME_PUT } from "../actions/usernamePut.action"

const initialState = {}

export default function userGetReducer(state = initialState, action) {
    switch (action.type) {
        case USER_GET:
            return { ...state, ...action.payload }
        case LOGOUT_USER:
            return initialState
        case USERNAME_PUT:
            return { ...state, userName: action.payload }
        default:
            return state
    }
}
