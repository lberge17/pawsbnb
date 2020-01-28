export default (state = [], action) => {
    switch (action.type) {
        // case 'ADD_APPOINTMENT':

        //     return [...state, action.appointment]

        // case 'ADD_APPOINTMENTS':

        //     return action.appointments

        // case 'UPDATE_APPOINTMENT':

        //     return [...state.filter(appointment => appointment.id !== action.appointment.id), action.appointment]

        // case 'DELETE_APPOINTMENT':

        //     return state.filter(appointment => appointment.id !== action.id)

        default:

            return state

    }
}