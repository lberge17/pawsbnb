export const addUser = (user) => dispatch => {
    dispatch({
        type: 'ADD_USER',
        user
    })
}

export const removeUser = () => dispatch => {
    dispatch({
        type: 'REMOVE_USER'
    })
}