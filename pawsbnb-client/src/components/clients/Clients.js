import React, { Component } from 'react'
import Client from './Client'
import Axios from 'axios'

export default class Clients extends Component {
    state = {
        clients: []
    }

    componentDidMount(){
        Axios.get('http://localhost:3000/clients', {withCredentials: true})
            .then(resp => {
                console.log(resp)
                this.setState({
                    clients: resp.data
                })
            })
    }
    render(){
        return <div>{this.state.clients.map(client => <Client client={client}/>)}</div>
    }
}