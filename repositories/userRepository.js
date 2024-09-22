const users = []; 

const createUser = (user) => {
    users.push(user);
    return user;
};

const findUserByEmail = (email) => {
    return users.find(user => user.email === email);
};

export default {
    createUser,
    findUserByEmail
};
