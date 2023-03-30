const { Router } = require('express')
const { graphqlHTTP } = require('express-graphql')
const router = Router()

const schema = require('../../graphql/schema')

router.use('/', graphqlHTTP({ schema, graphiql: true }))

module.exports = router
