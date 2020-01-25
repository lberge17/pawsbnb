import React, { Component } from 'react'
import BusinessForm from '../business/BusinessForm'

export default class Dashboard extends Component {
    state = {
        form: false
    }

    handleFormLoad = () => {
        console.log('handling form load')
        this.setState({
            form: true
        })
    }

    render() {
        if (!this.props.loggedIn) {
            this.props.history.push('/')
        }

        console.log(this.props.user)

        return (
            <div>
                {this.state.form ? 
                    <BusinessForm user={this.props.user} business={this.props.business} location={this.props.location}/> :
                    <button onClick={this.handleFormLoad}>{this.props.business ? 'Edit Your Business': 'Add Your Business'}</button>
                }
            </div>
        )
    }
}