import React, { Component } from 'react'
import axios from 'axios'

export default class ClientForm extends Component {
    state = {
        name: "",
        phone: "",
        email: "",
        emergency_contact: "",
        address: ""
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        this.props.addClient(this.state)
        this.props.toggleClientForm()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>Add a Client</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                /><br/>
                <input 
                    type="text" 
                    placeholder="Phone" 
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                /><br/>
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                /><br/>
                <input 
                    type="text" 
                    placeholder="Emergency Contact" 
                    name="emergency_contact"
                    value={this.state.emergency_contact}
                    onChange={this.handleChange}
                /><br/>
                <input 
                    type="text" 
                    placeholder="Address" 
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                /><br/><br/>
                <input type="submit"/><br/><br/>
            </form>
        )
    }
}