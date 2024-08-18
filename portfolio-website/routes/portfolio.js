const express = require('express');
const router = express.Router();
const Portfolio = require('../models/portfolio');

// Home Page
router.get('/', async (req, res) => {
    const portfolio = await Portfolio.findOne(); // Assumes a single portfolio for simplicity
    res.render('index', { portfolio });
});

// Edit Page
router.get('/edit', async (req, res) => {
    const portfolio = await Portfolio.findOne();
    res.render('edit', { portfolio });
});

// Update Portfolio
router.post('/edit', async (req, res) => {
    await Portfolio.updateOne({}, req.body);
    res.redirect('/');
});

// Delete Portfolio
router.get('/delete', async (req, res) => {
    await Portfolio.deleteOne({});
    res.redirect('/');
});

module.exports = router;
