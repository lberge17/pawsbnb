import React, {Component} from 'react'
import Logo from './images/pawsbnb-logo.png'

export default class Navbar extends Component {
    render() {
        return(
            <nav className="navbar">
                <a href="#"><img className="logo" src={Logo} alt="logo"/></a>
                <a href="#" className="navlink">Home</a>
                <a href="#" className="navlink">News</a>
                <a href="#" className="navlink">Contact</a>
                <a href="#" className="navlink">About</a>
            </nav>
        )
    }
}

