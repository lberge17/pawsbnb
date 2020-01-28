import React, { Component } from 'react'
import { ClientRow } from './ClientRow'
import Client from './Client'
import ClientForm from './ClientForm'
import './css/clients.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { addClient, removeClient } from '../../actions/clientsActions'

class Clients extends Component {
    state = {
        clientId: null,
        clientForm: false
    }

    toggleClientForm = () => {
        this.setState(prevState => {
            return {clientForm: !prevState.clientForm}
        })
    }

    loadClient = (client) => {
        this.setState({
            clientId: client.id
        })
    }

    removeClientPopup = () => {
        this.setState({
            client: null
        })
    }

    deleteClient = (id) => {
        this.props.removeClient(id)
    }

    render(){
        console.log(this.props)
        return (
            <div>
                {this.renderRedirectHome()}
                <h1 style={{textAlign: 'center'},{fontSize: '3em'}}>Clients List</h1>
                {this.props.requesting ? <div>loading...</div> : null}
                {this.state.clientForm ? <ClientForm toggleClientForm={this.toggleClientForm} addClient={this.props.addClient}/> : <button onClick={this.toggleClientForm}>Add new Client</button>}
                {this.state.clientId ? <Client clientId={this.state.clientId} removeClientPopup={this.removeClientPopup}/> : null}
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
                        {this.props.auth.clients[0] ? this.props.auth.clients.map(client => <ClientRow key={client.id} deleteClient={this.deleteClient} client={client} loadClient={this.loadClient}/>) : null}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    addClient: (client) => dispatch(addClient(client)),
    removeClient: (id) => dispatch(removeClient(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clients)