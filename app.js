require('dotenv').config(); 
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));

// middleware
const logger = require('./middleware/logger');
app.use(logger);

// view engine
app.set('view engine', 'ejs');

// routes
app.use('/', require('./routes/auth'));
app.use('/gym', require('./routes/gym'));

app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});