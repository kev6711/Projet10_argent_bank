import { Link, useLocation } from "react-router-dom"
import argentBankLogo from "../assets/img/compressed/argentBankLogo.webp"

function Header() {
    const pathname = useLocation().pathname
    return (
        <nav className="main-nav">
            <Link to="/" className="main-nav-logo">
                <img className="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                <h1 className="sr-only">Argent Bank</h1>
            </Link>
            {pathname === "/User" ? (
                <div>
                    <Link to="/User" className="main-nav-item">
                        <i className="fa fa-user-circle"></i>
                        Tony
                    </Link>
                    <Link to="/" className="main-nav-item">
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
