const express = require('express')
const router = express.Router()
const axios = require('axios')
const { paginationResults, buildJokeArray } = require('../../helpers/pagination')
const getGif = require('../../helpers/getGif')
const PORT = process.env.PORT || 3001

// http://localhost:3001/jokes
router.get('/', (req, res)=> {
    // res.send('This works')
    const url = `https://api.sampleapis.com/jokes/goodJokes`
    // pagination... 🤞🏼
    const pageData = paginationResults(req)

    // will store jokes in here
    let jokesArr = []

    axios.get(url)
        .then(resp => {

            const jokeArrData = buildJokeArray(resp.data, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)

            res.render('pages/allJokes', {
                title: 'All Jokes 🤣',
                name: 'All Jokes 🤣',
                data: jokeArrData.arr,
                prev: jokeArrData.prev,
                next: jokeArrData.next
            })
        })
})

// joke type
// localhost:3001/jokes/type/:type
router.get('/type/:type', (req, res)=> {


    const type = req.params.type
    const url = `https://api.sampleapis.com/jokes/goodJokes`
    const pageData = paginationResults(req)

    // we will filter through resp.data and store in typeArr
    let typeArr = []

    let jokesArr = []

    axios.get(url)
        .then(resp => typeArr = resp.data.filter(item => item.type == type))
        .then(typeArr => {

            const jokeArrData = buildJokeArray(typeArr, jokesArr, pageData.startIdx, pageData.endIdx, pageData.page)

            res.render('pages/allJokes', {
                title: `${type} 🤣`,
                name: `${type} jokes 🤣`,
                data: jokeArrData.arr,
                prev: jokeArrData.prev,
                next: jokeArrData.next
            })
        })

})

// single joke
router.get('/:id', (req, res)=> {

    const id = req.params.id 

    const url = `https://api.sampleapis.com/jokes/goodJokes/${id}`

    axios.get(url)
        .then(resp => {
            const joke = resp.data
            res.render('pages/singleJoke', {
                title: joke.setup,
                name: joke.setup,
                punchline: joke.punchline,
                prev: joke.id == 7 ? 3 : joke.id - 1,
                next: joke.id == 3 ? 7 : joke.id + 1,
                gif: getGif(),
                id: joke.id
            })

        })
})

module.exports = router