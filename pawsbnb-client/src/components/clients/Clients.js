import React, { Component } from 'react'
import ClientRow from './ClientRow'
import Client from './Client'
import Axios from 'axios'
import './css/clients.css'

export default class Clients extends Component {
    state = {
        clients: [],
        client: null
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

    loadClient = (client) => {
        this.setState({
            client
        })
    }

    removeClient = () => {(
        this.setState({
            client: null
        })
    )}

    render(){
        console.log(this.state.clients)
        return (
            <div>
                <h1 style={{textAlign: 'center'},{fontSize: '3em'}}>Clients List</h1>
                {this.state.client ? <Client client={this.state.client} removeClient={this.removeClient}/> : null}
                <table style={{width: '100%'}} className="client-tbl">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Emergency Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clients[0] ? this.state.clients.map(client => <ClientRow key={client.id} client={client} loadClient={this.loadClient}/>) : null}
                    </tbody>
                </table>
            </div>
        )
    }
}