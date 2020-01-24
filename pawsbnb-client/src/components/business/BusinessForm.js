import React, { Component } from 'react'
import Axios from 'axios';

export default class BusinessForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            services: "",
            location: "",
            zip: "",
            phone: "",
            email: "",
            website: "",
            user_id: this.props.user.id
        }
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        Axios.post('http://localhost:3000/businesses', {
                business: this.state
            }, { 
                withCredentials: true 
            })
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Add Your Business</h2>
                <input type="text" name="title" placeholder="title" onChange={this.handleChange} required/><br/><br/>
                <textarea name="description" placeholder="description" onChange={this.handleChange}></textarea><br/><br/>
                <textarea name="services" placeholder="services you offer" onChange={this.handleChange}></textarea><br/><br/>
                <input type="text" name="location" placeholder="location" required onChange={this.handleChange}/><br/>
                <input type="number" name="zip" placeholder="zip code" required onChange={this.handleChange}/><br/>
                <input type="text" name="phone" placeholder="phone#" onChange={this.handleChange}/><br/>
                <input type="text" name="email" placeholder="email" onChange={this.handleChange}/><br/>
                <input type="text" name="website" placeholder="website" onChange={this.handleChange}/><br/>
                <input type="submit" value= "Create Business"/>
            </form>
        )
    }
}