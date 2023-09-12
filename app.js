const express = require('express')
const routes = require('./routes')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')


console.log('hi')
const app = express()
const port = process.env.PORT || 3000

app.use(routes)

const SESSION_SECRET = 'secret'


app.use(express.urlencoded({ extended: true }))
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app
