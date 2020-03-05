const initialState = {
    company: null,
    companies: null
};

export default function CompanyReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_COMPANY':
            return {
                ...state,
                company: action.payload.company
            };
        case 'SET_COMPANIES':
            return {
                ...state,
                companies: action.payload.companies
            };
        default:
            return state;
    }
}
