export default (state = {}, action) => {
    switch (action.type) {
        case 'TEST_ACTION':

            return {
                ...state, ...action.test
            }

        default:

            return state

    }
}