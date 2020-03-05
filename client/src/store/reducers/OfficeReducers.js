const initialState = {
    office: null,
    offices: null
};

export default function OfficeReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_OFFICE':
            return {
                ...state,
                office: action.payload.office
            };
        case 'SET_OFFICES':
            return {
                ...state,
                offices: action.payload.offices
            };
        default:
            return state;
    }
}
