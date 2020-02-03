import React, { Component } from "react";
import PetForm from './PetForm'
import uuid from 'uuid'
import { connect } from "react-redux";
import { addPet } from '../../actions/petActions'

class Client extends Component {
    state = {
        petForm: false,
        tempPets: []
    }

    toggleForm = () => {
        this.setState({
            petForm: true
        })
    }

    renderPet = (pet) => {
        this.setState(prevState => ({
            tempPets: prevState.tempPets.concat(pet)
        }))
    }


    render(){
        const {name, phone, email, address, emergency_contact, pets} = this.props.auth.clients.find(c => c.id === this.props.clientId)
        console.log(this.props)

        return (
            <div className="client-data">
                <div className="right">
                    <a className="remove" onClick={this.props.removeClient}>&times;</a>
                </div>
                <h2>{name}</h2>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>Emergency Contact: {emergency_contact}</p>
                <h3>Pets</h3>
                { pets[0] ? pets.map(pet => <p key={pet.id}>Name: {pet.name}</p>) : <p>none listed</p> }
                { this.state.tempPets.map(pet => <p key={uuid()}>Name: {pet.name}</p>) }
                <button onClick={this.toggleForm}>Add a Pet</button>
                {this.state.petForm ? <PetForm addPet={this.props.addPet} renderPet={this.renderPet} toggleForm={this.toggleForm} clientId={this.props.clientId}/> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    addPet: (pet) => dispatch(addPet(pet))
})

export default connect(mapStateToProps, mapDispatchToProps)(Client)