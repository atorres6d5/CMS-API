const router = require('express').Router()
const { users , tokenCtrl} = require('../ctrl')



router.get('/decodeToken', tokenCtrl.verifyToken)
router.get('/oneUser/:id', tokenCtrl.checkToken, users.one)
router.post('/login', tokenCtrl.checkPass, tokenCtrl.makeToken)
router.post('/newUser', users.checkUser, tokenCtrl.checkToken, tokenCtrl.isAdmin, users.create )
router.patch('/:id', tokenCtrl.checkToken, tokenCtrl.isAdmin, users.update)
router.delete('/:id', tokenCtrl.checkToken, tokenCtrl.isAdmin, users.destroy)


module.exports = router
