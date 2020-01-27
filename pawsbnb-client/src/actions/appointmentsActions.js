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