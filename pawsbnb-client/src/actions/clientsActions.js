import Axios from 'axios'

// export const addClient = (client) => dispatch => {
//     dispatch({
//         type: 'ADD_CLIENT',
//         client
//     })
// }

export function addClient(client) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CLIENT_REQUEST' });
      Axios.post(`http://localhost:3000/clients`, {...client}, {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_CLIENT', client: response.data.client })
        })
        .catch(error => console.log(error))
    };
}

export function fetchClients() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_CLIENTS_REQUEST' });
      Axios.get('http://localhost:3000/clients', {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_CLIENTS', clients: response.data })
        })
        .catch(error => console.log(error))
    };
}

export function removeClient(id) {
    return (dispatch) => {
      dispatch({ type: 'START_REMOVING_CLIENT_REQUEST' });
      Axios.delete(`http://localhost:3000/clients/${id}`, {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'REMOVE_CLIENT', id })
        })
        .catch(error => console.log(error))
    };
}