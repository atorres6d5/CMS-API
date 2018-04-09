const jwt = require('jsonwebtoken')
const SECRET_KEY = "CUTCO_ORIGIN"
const bcrypt = require('bcryptjs')
const ctrl = require('./ctrl.js')(`users`)
const { usersModel } = require('../model')

class tokenCtrl extends ctrl {
  constructor(){
    super()
  }

  static makeToken ( req, res, next ) {
    const { user, org, admin } = req.body
    const token = jwt.sign({
      user,
      org,
      admin
    },
     SECRET_KEY,
    { expiresIn: '10h' })
    console.log('this is the token', token);
    req.newToken = token
    res.status(200).json({token})
  }

  static checkToken( req, res, next){
    const { token } = req.headers
    jwt.verify(token, SECRET_KEY, (err, decode)=>{
      err ? res.status(400).json({message:"Bad Token", err}) : req.decode = decode
    })
    console.log("checking if it got decoded", req.decode)
    next()
  }

  static checkPass(req, res, next) {
    const { pass } = req.body
    usersModel.userName(req.body.username).then(result=>{
      console.log(result)
      
      const dataPass = result.password
      bcrypt.compare( pass, dataPass, (err, res)=>{
        err ? res.status(400).json({message:err}) : req.hash = res
      })
    }).then(next())

  }

  static isAdmin(req, res, next){
    req.decode.admin ? next() : res.status(401).json({message:'Need to be an admin to do that'})
  }
}


module.exports = tokenCtrl
