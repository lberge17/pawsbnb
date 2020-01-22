import React, {Component} from 'react'
import Logo from './pawsbnb-logo.png'

export default class Home extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <div className="home">
                    <div className="panel img1"></div>
                    <div className="panel img2"></div>
                    <div className="panel img3"></div>
                    <div className="panel img4"></div>
                </div>
            </div>
        )
    }
}