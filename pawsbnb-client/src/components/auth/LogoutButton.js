import React from 'react'
import './css/auth.css'

export const LogoutButton = (props) => {
    return <button onClick={() => props.handleLogout(props.history)} className="logout">Logout</button>
}