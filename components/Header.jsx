import React from "react"
import logo from "/react-logo.png"

function Header() {
    return (
        <header>
            <nav>
                <img className="nav-logo" src={logo} alt="React logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header