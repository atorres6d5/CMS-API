const ctrl = require('./ctrl.js')(`features`)
const { featureModel } = require('../model')

class featureCtrl extends ctrl {
  constructor(){
    super()
  }

  static filterByOrg(req, res, next){
    const orgID = req.params.id
    const token = req.headers.token
    featureModel.byOrgID(orgID)
    .then(result=>{
      res.status(200).json({data:result})
    })

  }


  static debug(req, res, next){
    console.log(req.body)
    next()
  }


}

module.exports = featureCtrl
