const router = require('express').Router()
const { featureCtrl , tokenCtrl} = require('../ctrl')



router.get('/:id', featureCtrl.all)
router.post('/', featureCtrl.create)
router.patch('/:id', featureCtrl.update)
router.delete('/:id', featureCtrl.destroy)





module.exports = router
