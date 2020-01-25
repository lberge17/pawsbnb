export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':

            return true
        
        case 'LOGOUT':

            return false

        default:

            return state

    }
}