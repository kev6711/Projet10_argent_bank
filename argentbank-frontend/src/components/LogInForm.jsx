import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { logInPost } from "../actions/logInPost.action"
import { userGet } from "../actions/userGet.action"
import { Navigate } from "react-router-dom"

function LogInForm() {
    const form = useRef()
    const dispatch = useDispatch()
    const token = useSelector((state) => state.logInPostReducer?.body?.token)
    const loginStatus = useSelector((state) => state.logInPostReducer?.status)
    const handleForm = async (e) => {
        e.preventDefault()

        const postData = {
            email: form.current[0].value,
            password: form.current[1].value,
        }

        dispatch(logInPost(postData))
        form.current.reset()
    }

    if (token) dispatch(userGet(token))
    if (loginStatus === 200) {
        return <Navigate to="/User" />
    }

    return (
        <form ref={form} onSubmit={(e) => handleForm(e)}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">
                Sign In
            </button>
            {loginStatus && loginStatus !== 200 && (
                <p className="sign-in-error-message">
                    Wrong Username or Password <br /> Please try again
                </p>
            )}
        </form>
    )
}

export default LogInForm
