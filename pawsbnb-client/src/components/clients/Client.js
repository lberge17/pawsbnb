import React, { Component } from "react";
import PetForm from './PetForm'

export default class Client extends Component {
    state = {
        petForm: false
    }

    handleClick = () => {
        console.log('adding a pet')
        this.setState({
            petForm: true
        })
    }

    render(){
        const {name, phone, email, address, emergency_contact, pets} = this.props.client
        return (
            <div className="client-data">
                <div className="right">
                    <a className="remove" href="#" onClick={this.props.removeClient}>&times;</a>
                </div>
                <h2>{name}</h2>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>Emergency Contact: {emergency_contact}</p>
                <h3>Pets</h3>
                {pets ? pets.map(<p>Name: {pets.name}</p>) : <p>none listed</p>}
                <button onClick={this.handleClick}>Add a Pet</button>
                {this.state.petForm ? <PetForm client={this.props.client}/> : null}
            </div>
        )
    }
}