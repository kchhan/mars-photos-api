const express = require('express');
const router = express.Router();

const photo_controller = require('../controllers/photoController');

/* GET home page. */
router.get('/', photo_controller.index);

module.exports = router;
