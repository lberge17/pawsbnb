import React, { Component } from 'react'

export default class Business extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>Location: {this.props.location}</p>
                <p>Zip Code: {this.props.zip}</p>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }
}