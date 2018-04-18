const router = require('express').Router()
const { featureCtrl , tokenCtrl} = require('../ctrl')



router.get('/:id', featureCtrl.filterByOrg)
router.post('/', featureCtrl.debug, featureCtrl.create)
router.patch('/:id', featureCtrl.update)
router.delete('/:id', featureCtrl.destroy)





module.exports = router
