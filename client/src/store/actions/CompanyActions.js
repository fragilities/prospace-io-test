export const setCompany = company => {
    return {
        type: 'SET_COMPANY',
        payload: { company }
    };
};

export const setCompanies = companies => {
    return {
        type: 'SET_COMPANIES',
        payload: { companies }
    };
};
