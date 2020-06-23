const router = require('express').Router()
const fs = require('fs')


//Index: GET - /cats
router.get('/', (req, res) => {
    res.render('cats/index')
})

//Create: GET - /cats
router.get('/new', (req, res) => {
    res.render('cats/new')
})

//Show/Details: GET - /cats/:id
router.get('/:id', (req, res) => {
    res.render('cats/show')
})

//Add: POST - /cats
router.post('/', (req, res) => {
    res.send('create new cat')
})

//Edit: GET - /cats/:id
router.get('/:id', (req, res) => {
    res.render('cats/edit')
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