import { USER_GET } from "../actions/userGet.action"

const initialState = {}

export default function logInPostReducer(state = initialState, action) {
    switch (action.type) {
        case USER_GET:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
