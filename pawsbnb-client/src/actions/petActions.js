import Axios from 'axios'

export const removePet = (pet) => dispatch => {
    dispatch({
        type: 'REMOVE_PET',
        pet
    })
}

export function addPet(pet) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.post(`http://localhost:3000/pets`, {pet}, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'created') {
                dispatch({type: 'ADD_PET', pet: response.data.pet })
            }
            dispatch({ type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}