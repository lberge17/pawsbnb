import React, { Component } from 'react'
import { ClientRow } from './ClientRow'
import Client from './Client'
import ClientForm from './ClientForm'
import Axios from 'axios'
import './css/clients.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export default class Clients extends Component {
    state = {
        clients: [],
        client: null,
        clientForm: false
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

    toggleClientForm = () => {
        this.setState(prevState => {
            return {clientForm: !prevState.clientForm}
        })
    }

    loadClient = (client) => {
        this.setState({
            client
        })
    }

    removeClient = () => {
        this.setState({
            client: null
        })
    }

    deleteClient = (id) => {
        // Axios.delete(`http://localhost:3000/clients/${id}`, { withCredentials: true })
        //     .then(resp => console.log(resp))
        //     .catch(error => console.log(error))
        console.log('deleting client with id of ' + id)
    }

    render(){
        console.log(this.state.clients)
        return (
            <div>
                <h1 style={{textAlign: 'center'},{fontSize: '3em'}}>Clients List</h1>
                {/* <a href='/clients/new'>Add a new Client</a> */}
                {this.state.clientForm ? <ClientForm toggleClientForm={this.toggleClientForm}/> : <button onClick={this.toggleClientForm}>Add new Client</button>}
                {this.state.client ? <Client client={this.state.client} removeClient={this.removeClient}/> : null}
                <table style={{width: '100%'}} className="client-tbl">
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Address</th>
                            <th>Emergency Contact</th>
                            <th><FontAwesomeIcon icon={faTrash} /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.clients[0] ? this.state.clients.map(client => <ClientRow key={client.id} deleteClient={this.deleteClient} client={client} loadClient={this.loadClient}/>) : null}
                    </tbody>
                </table>
            </div>
        )
    }
}