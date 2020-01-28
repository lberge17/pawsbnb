import Axios from 'axios'

export const fetchSignin = (user) => {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.post(`http://localhost:3000/registrations`, user, {withCredentials: true})
            .then(response => {
                console.log(response)
                if (response.data.logged_in) {
                        dispatch({
                            type: 'LOGIN', 
                            user: response.data.user, 
                            business: response.data.business, 
                            clients: response.data.clients, 
                            appointments: response.data.appointments
                        })
                    } else {
                        // need some find of error
                    }
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))
    };
}