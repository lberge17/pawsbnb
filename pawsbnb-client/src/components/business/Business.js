import React from 'react'
import './css/business.css'
import Logo from "../home/images/pawsbnb-logo.png"

export const Business = (props)=> {
    return (
        <div className="card">
            <img className="card-logo" src={Logo} />
            <div className="container">
                <h4><b>{props.title}</b></h4>
                <p>Location: {props.location}</p>
                <p>Zip Code: {props.zip}</p>
                <p>Description: {props.description}</p>
                <p>Services: {props.services}</p>
                <p>Email: {props.email}</p>
                <p>Phone: {props.phone}</p>
                <p><a href={props.website}>Website: {props.website}</a></p>
            </div>
        </div>
    )
}