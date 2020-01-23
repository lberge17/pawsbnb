import React, {Component} from 'react'
import Logo from './images/pawsbnb-logo.png'
import Navbar from './Navbar'
import './css/home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                    <div className="home-wrapper">
                        <div className="home">
                            <a className="panel img1" href="#">
                                <p className="home-pg-link">Provider Login</p>
                            </a>
                            <a className="panel img2" href="#">
                                <p className="home-pg-link">{this.props.loggedIn ? 'you are logged in' : 'please log in'}</p>
                            </a>
                            <a className="panel img3" href="#">
                                <p className="home-pg-link">Pet Breed Info</p>
                            </a>
                            <a className="panel img4" href="/about">
                                <p className="home-pg-link">About PawsBnB</p>
                            </a>
                        </div>
                        <img className="centered-logo" src={Logo}/>
                    </div>
                </header>
            </div>
        )
    }
}