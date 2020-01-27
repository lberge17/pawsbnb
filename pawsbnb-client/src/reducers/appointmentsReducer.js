export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_APPOINTMENT':

            return action.appointments

        default:

            return state

    }
}