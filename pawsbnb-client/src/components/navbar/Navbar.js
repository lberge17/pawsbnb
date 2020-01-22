import React, {Component} from 'react'
import Logo from './pawsbnb-logo.png'

export default class Navbar extends Component {
    render() {
        return(
            <ul className="navbar">
                <li className="navlink"><img className="logo" src={Logo} alt="logo"/></li>
                <li className="navlink"><a href="#">Home</a></li>
                <li className="navlink"><a href="#">News</a></li>
                <li className="navlink"><a href="#">Contact</a></li>
                <li className="navlink"><a href="#">About</a></li>
            </ul>
        )
    }
}

