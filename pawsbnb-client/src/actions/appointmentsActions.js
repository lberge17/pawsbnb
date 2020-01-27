import Axios from "axios";

export function addAppointment(appointment) {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.post(`http://localhost:3000/appointments`, {appointment}, {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_APPOINTMENT', appointment: response.data.appointment })
            dispatch({ type: 'FINISH_FETCH_REQUEST' })
        })
        .catch(error => console.log(error))
    };
}

export function fetchAppointments() {
    return (dispatch) => {
      dispatch({ type: 'START_FETCH_REQUEST' });
      Axios.get(`http://localhost:3000/appointments`,  {withCredentials: true})
        .then(response => {
            console.log(response)
            dispatch({type: 'ADD_APPOINTMENTS', appointments: response.data })
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
                dispatch({type: 'UPDATE_APPOINTMENT', appointment: response.data.appointment })
                 dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))

    }
}