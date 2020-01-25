import React, { Component } from 'react'
import BusinessForm from '../business/BusinessForm'

export default class Dashboard extends Component {
    render() {
        if (!this.props.loggedIn) {
            this.props.history.push('/')
        }

        console.log(this.props.user)

        return (
            <div>
                {this.props.business ? <BusinessForm user={this.props.user} business={this.props.business}/> : <BusinessForm user={this.props.user} />}
            </div>
        )
    }
}