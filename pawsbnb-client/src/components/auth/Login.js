import React, { Component } from 'react'
import './css/auth.css';
// axios helps with api calls
import axios from 'axios';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        const { email, password } = this.state

        event.preventDefault();
        axios.post("http://localhost:3000/sessions", {
                user: {
                    email,
                    password
                }
            }, 
            { withCredentials: true }
        )
        .then(resp => {
            if (resp.data.status === "created") {
                this.props.handleSuccessfulAuth(resp.data, this.props.history)
            } else {
                console.log(resp)
            }
        })
        .catch(error => console.log(error))
    }

    render() {
        return <div>
            <form onSubmit={this.handleSubmit} className="auth-form">
                <input 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    placeholder="Email" 
                    required
                /><br/>
                <input 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    placeholder="Password" 
                    required
                /><br/>
                <input type="submit" value="Signup"/>
            </form>
        </div>
    }
}