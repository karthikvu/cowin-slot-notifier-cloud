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
    try {
        const d = await subscriptions.create(body)
        
    } catch(e) {
        console.error(e)
        if(e.message.includes('userid_pincode_age')){
            res.status(409).send(e)
        } else {
            res.status(500).send(e)
        }
    }
});

router.post('/renew', async function(req, res, next) {
    const { pincode, age} = req.body
    try {
         await subscriptions.resetNotifCount(req.user, pincode, age)
         res.status(200).json({})
    } catch(e) {
        res.status(500).send(e)
    }
});

router.patch('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.delete('/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
