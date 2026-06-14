const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const filePath = path.join(__dirname, 'users.json');

function loadUsers() {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([]));
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("Eroare la citirea utilizatorilor:", error);
        return [];
    }
}

function saveUsers(users) {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
}

module.exports = {
    async add(userData) {
        const users = loadUsers();
        const existingUser = users.find(u => u.email === userData.email);
        if (existingUser) throw new Error("Acest email este deja inregistrat");
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const newUser = {
            id: Date.now(),
            email: userData.email,
            password: hashedPassword
        };
        users.push(newUser);
        saveUsers(users);
        return newUser;
    },

    async findAndVerify(email, password) {
        const users = loadUsers();
        const user = users.find(u => u.email === email);
        if (!user) return null;
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            return user;
        }
        return null;
    }
};