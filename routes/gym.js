const express = require('express');
const router = express.Router();

const requireLogin = require('../middleware/requireLogin');
const workouts = require('../db/workouts');

router.use(requireLogin);

router.get('/', (req, res) => {
    res.render('gym/dashboard', {
        user: req.session.user,
        workouts,
        theme: req.cookies.theme || 'dark'
    });
});

router.post('/exercise/add', (req, res) => {
    const { name, muscle } = req.body;
    if (name && muscle) {
        workouts.push({
            id: workouts.length + 1,
            name,
            muscle,
            logs: []
        });
    }
    res.redirect('/gym');
});

router.post('/exercise/:id/log', (req, res) => {
    const workout = workouts.find(w => w.id == req.params.id);
    const { weight, reps } = req.body;
    if (workout && weight && reps) {
        workout.logs.push({
            date: new Date().toLocaleDateString('ro-RO'),
            weight,
            reps
        });
    }
    res.redirect(`/gym/exercise/${req.params.id}`);
});

router.get('/exercise/:id', (req, res) => {
    const workout = workouts.find(w => w.id == req.params.id);
    if (!workout) return res.redirect('/gym');
    res.render('gym/exercise', { workout });
});

router.post('/macro/calculate', (req, res) => {
    const { weight, goal } = req.body;
    const calories = goal === 'lose' ? weight * 26 : goal === 'gain' ? weight * 35 : weight * 30;
    const protein = weight * 2;
    const carbs = (calories * 0.4) / 4;
    const fats = (calories * 0.25) / 9;
    res.json({
        calories: Math.round(calories),
        protein: Math.round(protein),
        carbs: Math.round(carbs),
        fats: Math.round(fats)
    });
});

module.exports = router;