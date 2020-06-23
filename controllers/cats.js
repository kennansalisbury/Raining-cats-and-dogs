const router = require('express').Router()
const fs = require('fs')


//Index: GET - /cats
router.get('/', (req, res) => {
    let cats = fs.readFileSync('./cats.json')
    let catData = JSON.parse(cats)
    
    res.render('cats/index', {cats: catData})
})

//Create: GET - /cats
router.get('/new', (req, res) => {
    res.render('cats/new')
})

//Show/Details: GET - /cats/:id
router.get('/:id', (req, res) => {
    let cats = fs.readFileSync('./cats.json')
    cats = JSON.parse(cats)

    index = req.params.id

    res.render('cats/show', {cat: cats[index], index: index})
})

//Add: POST - /cats
router.post('/', (req, res) => {
    let cats = fs.readFileSync('./cats.json')
    cats = JSON.parse(cats)

    //add item to cats array
    cats.push(req.body)

    //save cats to the data json file
    fs.writeFileSync('./cats.json', JSON.stringify(cats))

    //redirect to cat just created
    res.redirect('/cats/' + (cats.length-1))
    // res.send(req.body)
})

//Edit: GET - /cats/:id
router.get('/edit/:id', (req, res) => {
    let cats = fs.readFileSync('./cats.json')
    cats = JSON.parse(cats)

    index = req.params.id
    
    res.render('cats/edit', {cat: cats[index], index: index})
})

//Update: PUT - /cats/:id
router.put('/:id', (req, res) => {
    res.send('edit cat')
})

//Destroy: DELETE - /cats/:id
router.delete('/:id', (req, res) => {
    res.send('delete cat')
})



module.exports = router