const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateRubbish = require('./generate_rubbish.js')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const title = req.body.target
  const rubbish = generateRubbish(title)
  res.render('index', { rubbish: rubbish })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})