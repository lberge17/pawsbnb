import React from 'react'

export const LogoutButton = (props) => {
    return <button onClick={() => props.handleLogout(props.history)} className="logout">Logout</button>
}