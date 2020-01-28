import React, { Component } from 'react'
import './css/auth.css';
import Logo from '../../logo/pawsbnb-logo.png'
import axios from 'axios';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
            errors: ''
        }
    }

    handleSubmit = (event) => {
        const { name, email, password, password_confirmation } = this.state

        event.preventDefault();
        axios.post("http://localhost:3000/registrations", {
                user: {
                    name,
                    email,
                    password,
                    password_confirmation
                }
            }, 
            { withCredentials: true }
        )
        .then(resp => this.props.handleSuccessfulAuth(resp.data, this.props.history))
        .catch(error => console.log(error))
        // this.setState({
        //     name: '',
        //     email: '',
        //     password: '',
        //     password_confirmation: ''
        // })
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        return (
            <div className="auth-background">
                <div className="auth-box signup">
                    <img src={Logo} alt="logo" className="auth-logo"/>
                    <form onSubmit={this.handleSubmit} className="auth-form">
                        <input 
                            type="text" 
                            name="name" 
                            value={this.state.name} 
                            onChange={this.handleChange} 
                            placeholder="Full Name" 
                            required
                        /><br/>
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
                        <input 
                            type="password" 
                            name="password_confirmation" 
                            value={this.state.password_confirmation} 
                            onChange={this.handleChange} 
                            placeholder="Confirm Password" 
                            required
                        /><br/>
                        <input type="submit" value="Signup"/>
                    </form>
                </div>
            </div>
        )
    }
}