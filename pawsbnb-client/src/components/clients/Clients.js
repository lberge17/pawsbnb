import React, { Component } from 'react'
import { ClientRow } from './ClientRow'
import Client from './Client'
import ClientForm from './ClientForm'
import Axios from 'axios'
import './css/clients.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import {addClient, removeClient} from '../../actions/clientsActions'

class Clients extends Component {
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
        console.log('deleting client with id of ' + id)
        Axios.delete(`http://localhost:3000/clients/${id}`, { withCredentials: true })
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
    }

    render(){
        console.log(this.state.clients)
        return (
            <div>
                <h1 style={{textAlign: 'center'},{fontSize: '3em'}}>Clients List</h1>
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

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addClient: (client) => dispatch(addClient(client)),
    removeClient: (id) => dispatch(addClient(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients)