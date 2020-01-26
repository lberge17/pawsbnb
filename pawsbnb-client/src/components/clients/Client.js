import React, { Component } from "react";

export default class Client extends Component {
    handleClick = () => {
        console.log('adding a pet')
    }

    render(){
        const {name, phone, email, address, emergency_contact, pets} = this.props
        return (
            <div>
                <h2>{name}</h2>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
                <p>Address: {address}</p>
                <p>Emergency Contact: {emergency_contact}</p>
                <h3>Pets</h3>
                {pets ? pets.map(<p>Name: {pets.name}</p>) : <p>none listed</p>}
                <button onClick={handleClick}>Add a Pet</button>
            </div>
        )
    }
}