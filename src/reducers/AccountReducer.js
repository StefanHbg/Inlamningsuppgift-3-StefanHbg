let initialState = {
    myDetails: []
}

const accountReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_DETAILS':
            return {
                myDetails: action.payload
            }
        default:
            return state;
    }
}

export default accountReducer;