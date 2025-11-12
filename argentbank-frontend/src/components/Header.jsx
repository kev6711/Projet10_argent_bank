import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import argentBankLogo from "../assets/img/compressed/argentBankLogo.webp"
import { logOutUser } from "../actions/logOutUser.action"
import { useEffect } from "react"
import { userGet } from "../actions/userGet.action"

function Header() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.logInPostReducer?.body?.token) || localStorage.getItem("token")
    const isConnected = !!token
    const userName = useSelector((state) => state.userGetReducer.userName)

    useEffect(() => {
        if (token) {
            dispatch(userGet(token))
        }
    }, [token, dispatch])

    const handleSignOut = () => {
        dispatch(logOutUser())
    }

    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {isConnected ? (
                <div>
                    <Link to="/User" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        {userName}
                    </Link>
                    <Link to="/" className="main-nav-item" onClick={handleSignOut}>
                        <i className="fa fa-sign-out"></i>
                        Sign Out
                    </Link>
                </div>
            ) : (
                <div>
                    <Link to="/SignIn" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            )}
        </nav>
    )
}

export default Header
