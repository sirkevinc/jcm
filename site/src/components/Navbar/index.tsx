import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-black.png"

const Navbar = () => {
    return (
        <nav className="nav__container">
            <img className="nav__logo" src={logo} />
            <ul>
                <Link className="text-link" to="/">Home</Link>
                <Link className="text-link" to="/about">About</Link>
                <Link className="text-link" to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Navbar