import React, {Component} from 'react'
import Logo from '../../logo/pawsbnb-logo.png'
import './css/home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-wrapper">
                    <div className="home">
                        <a className="panel img1" href={this.props.loggedIn ? '/dashboard' : "/login"}>
                            <p className="home-pg-link">{this.props.loggedIn ? 'Dashboard' : 'Provider Login'}</p>
                        </a>
                        <a className="panel img2" href="/businesses">
                            <p className="home-pg-link">Search for a PawsBnB</p>
                        </a>
                        <a className="panel img3" href={this.props.loggedIn ? '/clients' : "/signup"}>
                            <p className="home-pg-link">{this.props.loggedIn ? 'Clients List' : "Create a Provider Account"}</p>
                        </a>
                        <a className="panel img4" href="/about">
                            <p className="home-pg-link">About PawsBnB</p>
                        </a>
                    </div>
                    <img className="centered-logo" src={Logo} alt="logo"/>
                </div>
            </div>
        )
    }
}