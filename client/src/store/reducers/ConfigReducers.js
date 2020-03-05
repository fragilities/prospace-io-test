const initialState = {
    isLoading: true
};

export default function ConfigReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_ISLOADING':
            return {
                ...state,
                isLoading: action.payload.isLoading
            };
        default:
            return state;
    }
}
