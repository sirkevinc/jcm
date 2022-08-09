import React from "react"
import Logo from "../../images/logo-transparent.png"
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__content">
                <img className="footer__logo" src={Logo} alt="JCM logo" />
                <span>Copyright © 2022 JCM</span>
                <ul>
                    <li><Link className="text-link" to="/">Home</Link></li>
                    <li><Link className="text-link" to="/about">About</Link></li>
                    <li><Link className="text-link" to="/contact">Contact</Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer