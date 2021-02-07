const express = require('express');
const router = express.Router();
router.use(express.static('public'))

/* GET home page */
router.get('/', (req, res, next) => res.render('index', { title: 'Drnz' }));

module.exports = router;
