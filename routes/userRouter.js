const router = require('express').Router()
const { users , tokenCtrl} = require('../ctrl')




router.post('/newUser', tokenCtrl.checkToken, users.createNewUser )


module.exports = router
