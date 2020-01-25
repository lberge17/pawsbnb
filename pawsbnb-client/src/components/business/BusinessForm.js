import React, { Component } from 'react'
import Axios from 'axios';

export default class BusinessForm extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            title: props.business.title || "",
            description: props.business.description || "",
            services: props.business.services || "",
            location: props.business.location || "",
            zip: props.business.zip || "",
            phone: props.business.phone || "",
            email: props.business.email || "",
            website: props.business.website || ""
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
            .then(resp => {
                console.log(resp)
                window.location.reload()
            })
            .catch(error => console.log(error))
    }

    handleUpdate = (event) => {
        event.preventDefault()
        console.log('updating business')

        Axios.patch(`http://localhost:3000/businesses/${this.props.business.id}`, {
            business: this.state
        }, {
            withCredentials: true
        })
        .then(resp => {
            console.log(resp)
            window.location.reload()
        })
        .catch(error => {
            alert('error fetching')
            console.log(error)
        })
    }

    render() {
        return (
            <form onSubmit={this.props.business.title ? this.handleUpdate : this.handleSubmit}>
                <h2>{this.props.business.title ? 'Edit':'Add'} Your Business</h2>
                <input type="text" name="title" value={this.state.title} placeholder="title" onChange={this.handleChange} required/><br/><br/>
                <textarea name="description" value={this.state.description} placeholder="description" onChange={this.handleChange}></textarea><br/><br/>
                <textarea name="services" value={this.state.services} placeholder="services you offer" onChange={this.handleChange}></textarea><br/><br/>
                <input type="text" name="location" value={this.state.location} placeholder="location" required onChange={this.handleChange}/><br/>
                <input type="number" name="zip" value={this.state.zip} placeholder="zip code" required onChange={this.handleChange}/><br/>
                <input type="text" name="phone" value={this.state.phone} placeholder="phone#" onChange={this.handleChange}/><br/>
                <input type="text" name="email" value={this.state.email} placeholder="email" onChange={this.handleChange}/><br/>
                <input type="text" name="website" value={this.state.website} placeholder="website (https://www.ex.com)" onChange={this.handleChange}/><br/>
                <input type="submit" value={this.props.business.title ? 'Update Business' : 'Add Business'}/>
            </form>
        )
    }
}