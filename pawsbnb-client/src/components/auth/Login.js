import React, { Component } from 'react'
import './css/auth.css';
import Logo from '../../logo/pawsbnb-logo.png'
import axios from 'axios';

export default class Login extends Component {
    state = {
        email: "",
        password: "",
        error: ""
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
            if (resp.data.logged_in) {
                this.props.handleSuccessfulAuth(resp.data, this.props.history)
            } else {
                console.log(resp)
                this.setState({
                    error: "Invalid login."
                })
            }
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="auth-background">
                <div className="auth-box">
                    <img src={Logo} alt="logo" className="auth-logo"/>
                    <form onSubmit={this.handleSubmit} className="auth-form">
                        <p className="error">{this.state.error}</p>
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
                        <input type="submit" value="Login"/>
                    </form>
                </div>
            </div>
        )
    }
}