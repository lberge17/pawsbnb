export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_APPOINTMENT':

            return [...state, action.appointment]

        default:

            return state

    }
}