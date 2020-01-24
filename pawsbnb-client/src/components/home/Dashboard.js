import React, { Component } from 'react'
import BusinessForm from '../business/BusinessForm'

export default class Dashboard extends Component {
    render() {
        if (!this.props.loggedIn) {
            this.props.history.push('/')
        }

        return (
            <div>
                <BusinessForm user={this.props.user} />
            </div>
        )
    }
}