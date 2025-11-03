import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import argentBankLogo from "../assets/img/compressed/argentBankLogo.webp"
import { logOutUser } from "../actions/logOutUser.action"

function Header() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state.logInPostReducer?.body?.token)
    const isConnected = !!token
    const firstName = useSelector((state) => state.userGetReducer.firstName)
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
                        {firstName}
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
