var express = require('express');
var router = express.Router();
const subscriptions = require('../models/subscriptions')
/* GET users listing. */
router.get('/', async function(req, res, next) {
    console.log(req.user)
    const d = await subscriptions.findByUserId(req.user)
    res.status(200).json(d)
});

router.post('/', async function(req, res, next) {
    const body = req.body
    body.userId = req.user
    const d = await subscriptions.create(body)
    res.status(200).json(d)
});

router.patch('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
