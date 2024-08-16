const express = require('express');
const { searchProblems } = require('../controllers/problemController');
const router = express.Router();

router.post('/search', searchProblems);

module.exports = router;
