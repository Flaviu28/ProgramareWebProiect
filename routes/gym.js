const express = require('express');
const router = express.Router();

const requireLogin = require('../middleware/requireLogin');
const workouts = require('../db/workouts');

router.use(requireLogin);

// ROUTA 1 (cerință principală)
router.get('/', (req, res) => {
    req.session.views = (req.session.views || 0) + 1;

    res.render('gym/dashboard', {
        user: req.session.user,
        workouts,
        views: req.session.views,
        theme: req.cookies.theme
    });
});

// ROUTA 2 (subrută cerută)
router.get('/exercise/:id', (req, res) => {
    const workout = workouts.find(w => w.id == req.params.id);

    res.render('gym/exercise', {
        workout
    });
});

module.exports = router;