import { LOGIN_POST } from "../actions/logInPost.action"

const initialState = {}

export default function logInPostReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_POST:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
