require('dotenv').config()
const jwt = require('jsonwebtoken')
const SECRET_TOKEN= process.env.SECRET;

function requireAuth(req, res, next) {
  const authToken = req.get('Authorization') || ''
  
  let bearerToken;
  // Check to see if authorization header exists with bearer, if not return an error
  if(!authToken.toLowerCase().startsWith('bearer ')){
    return res.status(401).json({ error: 'Unauthorized request' })
  } else {
    // bearerToken = authToken.slice('bearer '.length, authToken.length)
    bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoidGVzdCJ9.8e-qEtKUStaoart4wGtsIPT-_CxWcGYQ3Rgk7KnBZnw'
  }
  
  if(bearerToken) {
    try {
      return jwt.verify(bearerToken, SECRET_TOKEN, { algorithms: ['HS256']})
    } catch(err) {
      return null;
    }
  }
  req.user = user
  console.log(req.user)
  next()
}

module.exports = { requireAuth }