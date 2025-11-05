export const LOGOUT_USER = "LOGOUT_USER"

export const logOutUser = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER })
    localStorage.removeItem("token")
}
