export default (state = {loggedIn: false, user: {}, business: {}, clients: [], appointments: []}, action) => {
    let client
    switch (action.type) {

        case 'LOGIN':

            return {
                ...state,
                loggedIn: true,
                user: action.user,
                business: action.business,
                clients: action.clients,
                appointments: action.appointments
            }

        
        case 'LOGOUT':

            return {
                ...state,
                loggedIn: false,
                user: {},
                business: {},
                clients: [],
                appointments: []
            }

        case 'ADD_USER':

            return {
                ...state,
                user: {
                    ...action.user
                }
            }
            
        case 'REMOVE_USER':
    
            return {
                ...state,
                user: {}
            }

           
        case 'ADD_CLIENTS':
            
            return {
                ...state,
                clients: [...action.clients]
            }

        case 'ADD_CLIENT':

            return {
                ...state,
                clients: state.clients.concat(action.client)
            }
    
            
        case 'REMOVE_CLIENT':
    
            return  {
                ...state,
                clients: state.clients.filter(client => client.id !== action.id)
            }

        case 'ADD_PET':

            client = state.clients.find(client => client.id === action.pet.client_id)
            console.log(client)

            return {
                ...state,
                clients: [...state.clients, 
                    {...client, pets: client.pets.concat(action.pet)}
                ]
            }

        case 'REMOVE_PET':

            client = state.clients.find(client.id === action.pet.client_id)

            return {
                ...state,
                clients: [...state.clients, 
                    {...client, pets: client.pets.filter(pet => pet.id !== action.pet.id)}
                ]
            }

        case 'ADD_BUSINESS':

            return {
                ...state,
                business: {
                    ...action.business
                }
            }
            
        case 'REMOVE_BUSINESS':
    
            return {
                ...state,
                business: {},
            }
    
        default:
    
            return state
    

        default:

            return state

    }
}