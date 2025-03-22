const express = require('express');
const { startEvent, stopEvent } = require('../controllers/eventController');
const router = express.Router();

router.post('/start', startEvent);
router.post('/stop', stopEvent);

module.exports = router;