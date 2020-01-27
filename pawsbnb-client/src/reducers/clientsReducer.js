export default (state = { clients: [], requesting: false}, action) => {
    switch (action.type) {
        case 'ADD_CLIENT':

            return {
                ...state,
                clients: state.clients.concat(action.client),
                requesting: false
            }

        case 'START_REMOVING_CLIENT_REQUEST':

            return {
                ...state,
                clients: [...state.clients],
                requesting: true
            }
        
        case 'REMOVE_CLIENT':

            return {
                ...state,
                clients: state.clients.filter(client => client.id !== action.id),
                requesting: false
            }

        case 'START_ADDING_CLIENTS_REQUEST':

                return {
                  ...state,
                  clients: [...state.clients],
                  requesting: true
                }
           
        case 'ADD_CLIENTS':
            
                return {
                  ...state,
                  clients: action.clients,
                  requesting: false
                }

        default:

            return state

    }
}