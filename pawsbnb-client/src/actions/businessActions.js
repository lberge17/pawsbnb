import Axios from "axios"

// export const addBusiness = (business) => dispatch => {
//     dispatch({
//         type: 'ADD_BUSINESS',
//         business
//     })
// }

// export const removeBusiness = () => dispatch => {
//     dispatch({
//         type: 'REMOVE_BUSINESS'
//     })
// }

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