export const setOffice = office => {
    return {
        type: 'SET_OFFICE',
        payload: { office }
    };
};

export const setOffices = offices => {
    return {
        type: 'SET_OFFICES',
        payload: { offices }
    };
};
