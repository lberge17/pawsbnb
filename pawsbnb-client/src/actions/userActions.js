import Axios from 'axios'

export const addUser = (user) => dispatch => {
    dispatch({
        type: 'ADD_USER',
        user
    })
}

export const removeUser = () => dispatch => {
    dispatch({
        type: 'REMOVE_USER'
    })
}

export const login = () => dispatch => {
    dispatch({
        type: 'LOGIN'
    })
}

export const logout = () => dispatch => {
    dispatch({
        type: 'LOGOUT'
    })
}

export const fetchLoginStatus = () => dispatch => {
    return (dispatch) => {
        dispatch({ type: 'START_FETCH_REQUEST' });
        Axios.get(`http://localhost:3000/logged_in`, {withCredentials: true})
          .then(response => {
              console.log(response)
              if (response.data.logged_in) {
                    dispatch({type: 'ADD_USER', user: response.data.user})
                    dispatch({type: 'ADD_BUSINESS', user: response.data.business})
                    dispatch({type: 'LOGIN'})
                } else {
                    dispatch({type: 'REMOVE_USER'})
                    dispatch({type: 'REMOVE_BUSINESS'})
                    dispatch({type: 'LOGOUT'})
                }
              dispatch({ type: 'FINISH_FETCH_REQUEST' })
          })
          .catch(error => console.log(error))
      };
}

