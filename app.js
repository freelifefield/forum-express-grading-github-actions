const express = require('express')
const routes = require('./routes')

console.log('hi')
const app = express()
const port = process.env.PORT || 3000

app.use(routes)

app.listen(port, () => {
  console.info(`Example app listening on port ${port}!`)
})

module.exports = app
