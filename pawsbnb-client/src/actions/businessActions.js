import Axios from "axios"

export function fetchBusinesses() {
    return(dispatch) => {
        dispatch({type: 'START_FETCH'})
        Axios.get('http://localhost:3000/businesses', {withCredentials: true})
            .then(response => {
                console.log(response)
                dispatch({type: 'ADD_BUSINESSES', businesses: response.data})
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))
    }
}

export function addBusiness(business) {
    return(dispatch) => {
        dispatch({type: 'START_FETCH'})
        Axios.post('http://localhost:3000/businesses', business, {withCredentials: true})
            .then(response => {
                console.log(response)
                if (response.data.status === 'created') {
                    dispatch({type: 'ADD_BUSINESS', business: response.data.business})
                }
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))
    }
}

export function updateBusiness(business) {
    return(dispatch) => {
        dispatch({type: 'START_FETCH'})
        Axios.patch(`http://localhost:3000/businesses/${business.id}`, business, {withCredentials: true})
            .then(response => {
                console.log(response)
                if (response.data.status === 'updated') {
                    dispatch({type: 'UPDATE_BUSINESS', business: response.data.business})
                }
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))
    }
}