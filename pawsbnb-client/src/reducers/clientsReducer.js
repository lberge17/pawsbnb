export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_CLIENT':

            return state.concat(action.client)
        
        case 'REMOVE_CLIENT':

            return state.filter(client => client.id !== action.id)

        default:

            return state

    }
}