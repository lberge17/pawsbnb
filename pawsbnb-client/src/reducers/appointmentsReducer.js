export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_APPOINTMENT':

            return [...state, action.appointment]

        case 'ADD_APPOINTMENTS':

            return action.appointments

        default:

            return state

    }
}