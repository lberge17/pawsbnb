export const addClient = (client) => dispatch => {
    dispatch({
        type: 'ADD_CLIENT',
        client
    })
}

export const removeClient = (id) => dispatch => {
    dispatch({
        type: 'REMOVE_CLIENT',
        id
    })
}