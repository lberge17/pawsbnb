export const testAction = () => dispatch => {
    dispatch({
        type: 'TEST_ACTION',
        test: {message: 'working'}
    })
}