import Axios from 'axios'

export function addClient(client) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.post(`http://localhost:3000/clients`, {...client}, {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_CLIENT', client: response.data.client })
            dispatch({type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}

export function fetchClients() {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.get('http://localhost:3000/clients', {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_CLIENTS', clients: response.data })
            dispatch({type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}

export function removeClient(id) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.delete(`http://localhost:3000/clients/${id}`, {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'REMOVE_CLIENT', id })
            dispatch({ type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}