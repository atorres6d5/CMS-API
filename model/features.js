const Model  = require('./model.js')(`features`)
const db = require('../database/connection.js')


class featureModel extends Model {
  constructor(){
    super()
  }

  static byOrgID(orgID){
    return db(`features`).where({ orgID })
  }

}


module.exports = featureModel
