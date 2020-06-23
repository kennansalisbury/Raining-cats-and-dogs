// ----------  DECLARATIONS  --------------------
const express = require('express')
const layouts = require('express-ejs-layouts')
const app = express()
let methodOverride = require('method-override')

app.set('view engine', 'ejs')
app.use('/', express.static('static'))
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(layouts)

/*------------- ROUTES/CONTROLLERS --------------*/
//Controllers:
app.use('/cats', require('./controllers/cats'))
app.use('/dogs', require('./controllers/dogs'))

//Home: GET - /
app.get('/', (req,res) => {
    res.render('home')
})


// ----------  PORT  --------------------
app.listen(3000)