const jwt = require('jsonwebtoken')

const createJWTToken = (user, expiresIn = '1h') => {
  const privateKey = process.env.TOKEN_PRIVATE_KEY

  const token = jwt.sign({ user }, privateKey, {
    expiresIn,
  })

  return token
}

const verifyToken = token => {
  const privateKey = process.env.TOKEN_PRIVATE_KEY

  const verified = jwt.verify(token, privateKey)

  return verified
}

module.exports = { createJWTToken, verifyToken }
