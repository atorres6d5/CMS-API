const ctrl = require('./ctrl.js')(`users.js`)
const usersModel = require('../model/users.js')

class users extends ctrl{

  static createNewUser (req, res, next){
    let user = req.body.user
    return usersModel.createNewUser(user).then(result=>{
      
    })
  }

}




module.exports = users
