const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTrashTalk = require('./generate_trash_talk')
const checkTarget = require('./check_target')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const option = req.body
  const targetChecked = checkTarget(option.position)
  const trashTalk = generateTrashTalk(option.position)
  console.log(targetChecked)
  res.render('index', { trashTalk, targetChecked })
})

app.listen(port, () => {
  console.log('serving.')
})