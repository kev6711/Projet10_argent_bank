import axios from "axios"

export const USER_GET = "USER_GET"

export const userGet = (token) => {
    return async (dispatch) => {
        const res = await axios.get("http://localhost:3001/api/v1/user/profile", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return dispatch({ type: USER_GET, payload: res.data.body })
    }
}
