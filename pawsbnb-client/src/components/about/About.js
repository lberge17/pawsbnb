import React, {Component} from 'react'
import './css/about.css';
import Navbar from '../home/Navbar.js'

export default class About extends Component {
    render() {
        return (
            <div className="wrapper">
                <Navbar />
                <div className="about-container">
                    <h1 className="center">About</h1>
                </div>
            </div>
        )
    }
}