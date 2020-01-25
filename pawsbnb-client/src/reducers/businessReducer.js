export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_BUSINESS':

            return {
                ...action.business
            }
        
        case 'REMOVE_BUSINESS':

            return {}

        default:

            return state

    }
}