import React, { Component } from 'react'

export default class Dashboard extends Component {
    render() {
        if (!this.props.loggedIn) {
            this.props.history.push('/')
        }

        return <div>Dashboard</div>
    }
}