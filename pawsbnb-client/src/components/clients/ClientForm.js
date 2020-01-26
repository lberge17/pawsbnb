import React, { Component } from 'react'

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
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Phone" 
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Emergency Contact" 
                    name="emergency_contact"
                    value={this.state.emergency_contact}
                    onChange={this.handleChange}
                />
                <input 
                    type="text" 
                    placeholder="Address" 
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>
        )
    }
}