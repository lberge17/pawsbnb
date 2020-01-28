import Axios from 'axios'

export function addClient(client) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.post(`http://localhost:3000/clients`, {...client}, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'created') {
                dispatch({type: 'ADD_CLIENT', client: response.data.client })
            }
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
            if (response.data.status === 'deleted') {
                dispatch({type: 'REMOVE_CLIENT', id })
            }
            dispatch({ type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}