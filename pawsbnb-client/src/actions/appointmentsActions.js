import Axios from "axios";

export function addAppointment(appointment) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.post(`http://localhost:3000/appointments`, appointment, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'created') {
                dispatch({type: 'ADD_APPOINTMENT', appointment: response.data.appointment })
            }
            dispatch({ type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}

export function updateAppointment(appointment) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.patch(`http://localhost:3000/appointments/${appointment.id}`, {...appointment}, { withCredentials: true })
            .then(response => {
                console.log(response)
                if (response.data.status === 'updated') {
                    dispatch({type: 'UPDATE_APPOINTMENT', appointment: response.data.appointment })
                }
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))

    }
}

export function deleteAppointment(id) {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.delete(`http://localhost:3000/appointments/${id}`, { withCredentials: true })
            .then(response => {
                console.log(response)
                if (response.data.status === 'deleted') {
                    dispatch({type: 'DELETE_APPOINTMENT', id })
                }
                 dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))

    }
}