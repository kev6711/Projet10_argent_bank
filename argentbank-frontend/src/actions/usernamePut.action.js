import axios from "axios"

export const USERNAME_PUT = "USERNAME_PUT"

export const usernamePut = (token, data) => {
    return async (dispatch) => {
        const res = await axios.put("http://localhost:3001/api/v1/user/profile", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        return dispatch({ type: USERNAME_PUT, payload: res.data.body.userName })
    }
}
