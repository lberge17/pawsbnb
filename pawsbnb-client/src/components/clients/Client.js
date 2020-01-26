import React, { Component } from 'react'

export default class Client extends Component {
    render(){
        return <div>{this.props.client.name}</div>
    }
}