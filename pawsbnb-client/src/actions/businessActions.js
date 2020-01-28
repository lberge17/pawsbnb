import Axios from "axios"

export function fetchBusinesses() {
    return(dispatch) => {
        dispatch({type: 'START_FETCH'})
        Axios.get('http://localhost:3000/businesses')
            .then(response => {
                console.log(response)
                dispatch({type: 'ADD_BUSINESSES', businesses: response.data})
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))
    }
}