export default (state = {}, action) => {
    let client
    switch (action.type) {

        case 'ADD_CLIENT':

            return state.clients.concat(action.client)

        
        case 'REMOVE_CLIENT':

            return state.clients.filter(client => client.id !== action.id)

           
        case 'ADD_CLIENTS':
            
            return action.clients

        case 'ADD_PET':

                client = state.clients.find(client => client.id === action.pet.client_id)
                console.log(client)

                return [...state.clients, 
                        {...client, pets: client.pets.concat(action.pet)}
                    ]

        case 'REMOVE_PET':

                client = state.clients.find(client.id === action.pet.client_id)

                return [...state.clients, 
                    {...client, pets: client.pets.filter(pet => pet.id !== action.pet.id)}
                 ]
    

        default:

            return state

    }
}