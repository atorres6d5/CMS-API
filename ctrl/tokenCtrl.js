const jwt = require('jsonwebtoken')
const SECRET_KEY = "CUTCO_ORIGIN"

class tokenCtrl {

  static makeToken ( req, res, next ) {
    const token = jwt.sign({
      user,
      org,
      admin
    },
     SECRET_KEY,
    { expiresIn: '10h' })
    req.newToken = token
    next()
  }

  static checkToken( req, res, next){
    const uncode = jwt.verify(token, SECRET_KEY, (err, decode)=>{
      err ? {message:"Bad Token"} : req.decode = decode
    })
    uncode.message ? res.status(400).json({tokenERR:uncode}) : next()
  }

}
