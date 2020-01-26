import React, { Component } from 'react'

export default class ClientRow extends Component {
    render(){
        return (
            <tr>
                <td><a onClick={() => this.props.loadClient(this.props.client)} href="#">{this.props.client.name}</a></td>
                <td>{this.props.client.phone}</td>
                <td>{this.props.client.email}</td>
                <td>{this.props.client.address}</td>
                <td>{this.props.client.emergency_contact}</td>
            </tr>
        )
    }
}