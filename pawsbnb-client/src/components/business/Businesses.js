import React, { Component } from 'react'
import Business from './Business'
import axios from 'axios'

export default class Businesses extends Component {
    state = {
        businesses: []
    }

    componentDidMount() {
        axios.get("http://localhost:3000/businesses", { withCredentials: true })
            .then(resp => {
                console.log(resp)
                this.setState({
                    businesses: resp.data
                })
            })
            .catch(error => {
                alert("error getting businesses")
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h1>All Businesses</h1>
                {this.state.businesses.map(b => <Business {...b}/>)}
            </div>
        )
    }
}