import React, { Component } from  'react'
import Axios from 'axios'

export default class PetForm extends Component {
    state = {
        name: "",
        breed: "",
        gender: "",
        birthdate: "",
        weight: "",
        concerns: ""
    }

    handleChange = ({target}) => {
        this.setState({
            [target.name]: target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        Axios.post('http://localhost:3000/pets', {
                pet: {...this.state, client_id: this.props.client.id}
            }, {
                withCredentials: true
            })
            .then(resp => {
                console.log(resp)
                this.props.renderPet(resp.data.pet)
                this.props.toggleForm()
            })
            .catch(error => console.log('error post to pets:', error))
    }

    render(){
        return (
            <div className="pet-form">
                <form className="form-container" onSubmit={this.handleSubmit}>
                    <h3>Add Pet</h3>
                    <input 
                        type="text" 
                        placeholder="name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        placeholder="breed"
                        name="breed"
                        value={this.state.breed}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        placeholder="gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        placeholder="birthdate"
                        name="birthdate"
                        value={this.state.birthdate}
                        onChange={this.handleChange}
                    /><br/>
                    <input 
                        type="text" 
                        placeholder="weight"
                        name="weight"
                        value={this.state.weight}
                        onChange={this.handleChange}
                    /><br/>
                    <textarea 
                        placeholder="concerns"
                        name="concerns"
                        value={this.state.concerns}
                        onChange={this.handleChange}
                    ></textarea><br/><br/>
                    <input type="submit" value="Add Pet"/><br/>
                </form>
            </div>
        )
    }
}