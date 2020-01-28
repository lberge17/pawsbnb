import Axios from 'axios'

export const fetchLogin = (user) => {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.post(`http://localhost:3000/sessions`, user, {withCredentials: true})
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

export const fetchLogout = () => {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.delete(`http://localhost:3000/logout`, {withCredentials: true})
            .then(response => {
                console.log(response)
                if (response.data.logged_out) {
                        dispatch({type: 'LOGOUT'})
                    } else {
                        // need some kind of error
                    }
                dispatch({ type: 'FINISH_FETCH_REQUEST' })
            })
            .catch(error => console.log(error))
    };
}

export const fetchLoginStatus = () => {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.get(`http://localhost:3000/logged_in`, {withCredentials: true})
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
                    dispatch({type: 'LOGOUT'})
                }
              dispatch({ type: 'FINISH_FETCH_REQUEST' })
          })
          .catch(error => console.log(error))
      };
}

