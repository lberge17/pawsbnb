import React, {Component} from 'react'
import Logo from './pawsbnb-logo.png'
import Navbar from './Navbar'
import '../../App.css';

export default class Home extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Navbar/>
                    <div className="home-wrapper">
                        <div className="home">
                            <div className="panel img1">
                                <a className="home-pg-link" href="#">Provider Login</a>
                            </div>
                            <div className="panel img2">
                                <a className="home-pg-link" href="#">Client Login</a>
                            </div>
                            <div className="panel img3">
                                <a className="home-pg-link" href="#">Pet Breed Info</a>
                            </div>
                            <div className="panel img4">
                                <a className="home-pg-link" href="#">About PawsBnB</a>
                            </div>
                        </div>
                        <img className="centered-logo" src={Logo}/>
                    </div>
                </header>
            </div>
        )
    }
}