import * as React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles.scss"

interface LayoutProps {
    children: React.ReactNode
}


const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="site__container">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout