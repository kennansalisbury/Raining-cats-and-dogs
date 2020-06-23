const router = require('express').Router()
const fs = require('fs')

//Index: GET - /dogs
router.get('/', (req, res) => {
    let dogs = fs.readFileSync('./dogs.json')
    let dogData = JSON.parse(dogs)
    
    res.render('dogs/index', {dogs: dogData})
})

//Create: GET - /dogs
router.get('/new', (req, res) => {
    res.render('dogs/new')
})

//Show/Details: GET - /dogs/:id
router.get('/:id', (req, res) => {
    res.render('dogs/show')
})

//Add: POST - /dogs
router.post('/', (req, res) => {
    res.send('create new dog')
})

//Edit: GET - /dogs/:id
router.get('/:id', (req, res) => {
    res.render('dogs/edit')
})

//Update: PUT - /dogs/:id
router.put('/:id', (req, res) => {
    res.send('edit dog')
})

//Destroy: DELETE - /dogs/:id
router.delete('/:id', (req, res) => {
    res.send('delete dog')
})

module.exports = router