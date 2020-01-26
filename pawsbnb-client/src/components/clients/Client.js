import React, { Component } from 'react'

export default class Client extends Component {
    render(){
        return (
            <tr>
                <td>{this.props.client.name}</td>
                <td>{this.props.client.phone}</td>
                <td>{this.props.client.email}</td>
                <td>{this.props.client.address}</td>
                <td>{this.props.client.emergency_contact}</td>
            </tr>
        )
    }
}