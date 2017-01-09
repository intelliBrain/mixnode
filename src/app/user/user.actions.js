export const logIn = (data, token) => ({
    type: 'LOG_IN',
    data,
    token
});

export const logOut = () => ({
    type: 'LOG_OUT'
});
