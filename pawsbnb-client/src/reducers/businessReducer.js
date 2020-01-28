export default (state = [], action) => {
    switch (action.type) {
        case 'ADD_BUSINESSES':

            return action.businesses

        default:

            return state

    }
}