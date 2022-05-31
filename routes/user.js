const express = require('express')
const controller = require('../controller/user')

const router = express.Router()

router.get('/getusers',controller.getusers);
router.post('/addusers',controller.adduser);
router.delete('/remove_users/:id',controller.removeuser);
router.put('/update_users/:id',controller.updateuser);
router.post('/forgot_pass',controller.forgotpass)

module.exports = router;