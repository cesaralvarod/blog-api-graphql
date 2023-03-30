require('./config/config')
require('./config/db')
const express = require('express')
const morgan = require('morgan')
const routes = require('./routes/')

const app = express()

app.use(morgan('dev'))

app.use(routes)

const APP_PORT = process.env.APP_PORT || 4000

app.listen(APP_PORT, () => console.log(`Server running in port ${APP_PORT}`))
