export const addBusiness = (business) => dispatch => {
    dispatch({
        type: 'ADD_BUSINESS',
        business
    })
}

export const removeBusiness = () => dispatch => {
    dispatch({
        type: 'REMOVE_BUSINESS'
    })
}