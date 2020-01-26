import React, { Component } from 'react'
import Client from './Client'
import Axios from 'axios'
import './css/clients.css'

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
        console.log(this.state.clients)
        return (
            <table style={{width: '100%'}} className="client-tbl">
                <caption style={{textAlign: 'center'},{fontSize: '3em'}}>Clients List</caption>
                <tr>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Emergency Contact</th>
                </tr>
                {this.state.clients[0] ? this.state.clients.map(client => <Client client={client}/>) : null}
            </table>
        )
    }
}