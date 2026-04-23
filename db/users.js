const users = [];

module.exports = {
    users,
    find(email, pass) {
        return users.find(u => u.email === email && u.password === pass);
    },
    add(user) {
        users.push(user);
    }
};