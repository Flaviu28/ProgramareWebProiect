const express = require('express');
const router = express.Router();
const db = require('../db/users');

// register
router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', (req, res) => {
    db.add(req.body);
    req.session.user = req.body;
    req.session.views = 0;

    res.cookie('theme', 'dark'); // cookie propriu

    res.redirect('/gym');
});

// login
router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', (req, res) => {
    const user = db.find(req.body.email, req.body.password);

    if (user) {
        req.session.user = user;
        req.session.views = 0;

        res.cookie('theme', 'dark'); // cookie propriu
        return res.redirect('/gym');
    }

    res.send("Login failed");
});

// logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;