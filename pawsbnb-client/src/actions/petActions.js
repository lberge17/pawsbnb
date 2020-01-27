import Axios from 'axios'

export const removePet = (pet) => dispatch => {
    dispatch({
        type: 'REMOVE_PET',
        pet
    })
}

export function addPet(pet) {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_PET_REQUEST' });
      Axios.post(`http://localhost:3000/pets`, {pet}, {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_PET', pet: response.data.pet })
        })
        .catch(error => console.log(error))
    };
}