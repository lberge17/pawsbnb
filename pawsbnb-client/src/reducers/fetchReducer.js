export default (state = {}, action) => {
    switch (action.type) {
        case 'START_FETCH_REQUEST':

            return true

        case 'FINISH_FETCH_REQUEST':

            return false

        default:

            return state

    }
}