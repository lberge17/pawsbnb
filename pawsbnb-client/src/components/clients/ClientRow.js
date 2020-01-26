import React from 'react'

export const ClientRow = (props) => {
    return (
        <tr>
            <td><a onClick={() => props.loadClient(props.client)} href="#">{props.client.name}</a></td>
            <td>{props.client.phone}</td>
            <td>{props.client.email}</td>
            <td>{props.client.address}</td>
            <td>{props.client.emergency_contact}</td>
            <td onClick={() => props.deleteClient(props.client.id)}><a className="red no-line" href="" >&#9746;</a></td>
        </tr>
    )
}