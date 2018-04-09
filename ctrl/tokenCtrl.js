const jwt = require('jsonwebtoken')
const SECRET_KEY = "CUTCO_ORIGIN"
const bcrypt = require('bcryptjs')


class tokenCtrl {

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
    const uncode = jwt.verify(token, SECRET_KEY, (err, decode)=>{
      err ? {message:"Bad Token"} : req.decode = decode
    })
    uncode.message ? res.status(400).json({tokenERR:uncode}) : next()
  }

  static checkPass(req, res, next) {
    const { pass } = req.body
    bcrypt.hash('password', 10, (err, hash)=>{
      err ? res.status(400).json({message:err}) : res.status(200).json({ hash })
    })
  }

}


module.exports = tokenCtrl
