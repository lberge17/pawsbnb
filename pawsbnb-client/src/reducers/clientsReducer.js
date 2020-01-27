export default (state = { clients: [], requesting: false}, action) => {
    let client
    switch (action.type) {
        case 'START_ADDING_CLIENT_REQUEST':

            return {
                ...state,
                clients: [...state.clients],
                requesting: true
            }

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

        case 'START_ADDING_PET_REQUEST':

                return {
                    ...state,
                  clients: [...state.clients],
                  requesting: false
                }

        case 'ADD_PET':

                client = state.clients.find(client => client.id === action.pet.client_id)
                console.log(client)

                return {
                    ...state,
                    clients: [...state.clients, 
                        {...client, pets: client.pets.concat(action.pet)}
                    ],
                    requesting: false
                }

        case 'REMOVE_PET':

                client = state.clients.find(client.id === action.pet.client_id)

                return {
                    ...state,
                    clients: [...state.clients, 
                        {...client, pets: client.pets.filter(pet => pet.id !== action.pet.id)}
                    ],
                    requesting: false
                }

        default:

            return state

    }
}