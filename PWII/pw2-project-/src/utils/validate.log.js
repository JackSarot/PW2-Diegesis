const ValidateUserIsLogged = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    if (user === null || user === '' || token === null || token === '')
        return false;
    return true;
};

export { ValidateUserIsLogged };
