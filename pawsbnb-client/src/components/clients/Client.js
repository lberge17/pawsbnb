import React, { Component } from "react";
import PetForm from './PetForm'

export default class Client extends Component {
    state = {
        petForm: false,
        tempPets: []
    }

    toggleForm = () => {
        console.log('adding a pet')
        this.setState({
            petForm: true
        })
    }

    renderPet = (pet) => {
        this.setState(prevState => {
            return {
                tempPets: prevState.tempPets.concat(pet)
            }
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
                { pets[0] ? pets.map(pet => <p key={pet.id}>Name: {pet.name}</p>) : <p>none listed</p> }
                { this.state.tempPets.map(pet => <p>Name: {pet.name}</p>) }
                <button onClick={this.toggleForm}>Add a Pet</button>
                {this.state.petForm ? <PetForm renderPet={this.renderPet} toggleForm={this.toggleForm} client={this.props.client}/> : null}
            </div>
        )
    }
}