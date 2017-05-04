export const logIn = (data: any, token: any) => ({
    type: 'LOG_IN',
    data,
    token
});

export const logOut = () => ({
    type: 'LOG_OUT'
});
