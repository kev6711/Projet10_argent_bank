import "../assets/css/main.css"
import { Link } from "react-router-dom"
import argentBankLogo from "../assets/img/argentBankLogo.png"

function SignIn() {
    return (
        <div>
            <nav class="main-nav">
                <Link to="/" class="main-nav-logo">
                    <img class="main-nav-logo-image" src={argentBankLogo} alt="Argent Bank Logo" />
                    <h1 class="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <Link to="/SignIn" class="main-nav-item">
                        <i class="fa fa-user-circle"></i>
                        Sign In
                    </Link>
                </div>
            </nav>
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label>
                            <input type="text" id="username" />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label>
                            <input type="password" id="password" />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label for="remember-me">Remember me</label>
                        </div>
                        <Link to="/User">
                            <button class="sign-in-button">Sign In</button>
                        </Link>
                    </form>
                </section>
            </main>
            <footer class="footer">
                <p class="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}

export default SignIn
