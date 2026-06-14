const express = require('express');
const router = express.Router();
const db = require('../db/users');

router.get('/register', (req, res) => {
    res.render('register', { error: null });
});

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.render('register', { error: "Toate campurile sunt obligatorii" });
        }
        const user = await db.add({ email, password });
        req.session.user = { id: user.id, email: user.email };
        req.session.views = 0;
        res.cookie('theme', 'dark');
        res.redirect('/gym');
    } catch (error) {
        res.render('register', { error: error.message });
    }
});

router.get('/login', (req, res) => {
    res.render('login', { error: null });
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await db.findAndVerify(email, password);
        if (user) {
            req.session.user = { id: user.id, email: user.email };
            req.session.views = 0;
            res.cookie('theme', 'dark');
            return res.redirect('/gym');
        }
        res.render('login', { error: "Email sau parola incorecta" });
    } catch (error) {
        res.render('login', { error: "A aparut o eroare. Incearca din nou" });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.clearCookie('connect.sid');
        res.redirect('/');
    });
});

module.exports = router;