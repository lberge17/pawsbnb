import React, { Component } from 'react'
import './css/business.css'
import Logo from "../home/images/pawsbnb-logo.png"

export default class Business extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-logo" src={Logo} />
                <div className="container">
                    <h4><b>{this.props.title}</b></h4>
                    <p>Location: {this.props.location}</p>
                    <p>Zip Code: {this.props.zip}</p>
                    <p>Description: {this.props.description}</p>
                    <p>Services: {this.props.services}</p>
                    <p>Email: {this.props.email}</p>
                    <p>Phone: {this.props.phone}</p>
                    <p><a href={this.props.website}>Website: {this.props.website}</a></p>
                </div>
            </div>
        )
    }
}