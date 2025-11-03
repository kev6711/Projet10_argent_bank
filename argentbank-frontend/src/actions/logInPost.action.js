import axios from "axios"

export const LOGIN_POST = "LOGIN_POST"

export const logInPost = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("http://localhost:3001/api/v1/user/login", data)
            dispatch({ type: LOGIN_POST, payload: res.data })
        } catch (err) {
            dispatch({ type: LOGIN_POST, payload: err?.response?.data })
        }
    }
}
