const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const public = express.static('public')
const api = require('./routes/api')
const PORT = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/app', public)
app.use('/api', api)

app.get('/', (req, res) => res.json({
    'error': 'Access Denied!!'
}))

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))