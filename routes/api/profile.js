const express = require('express');
const router = express.Router();

// @route GET api User


router.get('/', (req,res) => res.send('Profile route'));

module.exports = router;
