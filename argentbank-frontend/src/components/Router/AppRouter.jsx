import Home from "../../pages/Home.jsx"
import SignIn from "../../pages/SignIn.jsx"
import User from "../../pages/User.jsx"
import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/User" element={<User />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
