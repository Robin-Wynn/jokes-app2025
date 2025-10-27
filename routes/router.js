const express = require('express')
const router = express.Router()
const axios = require('axios')
const getJoke = require('../helpers/getJoke')

// http://localhost:3001 => home page
router.get('/', (req, res)=> {
    // res.send('⚙️ Working...⚙️')
    const url = `https://api.sampleapis.com/jokes/goodJokes`

    axios.get(url)
        .then(resp => {
            // console.log(resp.data)

            // move to helper...
            // const randomJoke = resp.data[Math.floor(Math.random() * resp.data.length)]

            // console.log(randomJoke)
            res.render('pages/home', {
                title: "Robin's jokes app",
                name: "robin's jokes app!",
                joke: getJoke(resp.data)
            })
        })

})

// express version 4 or lower (V5 is newest)
// error handling
// router.get('*', (req, res)=> {

//     if (req.url == '/favicon.ico') {
//         res.end()
//     } else {
//         res.send('<h1>404 Error. Page does not exist</h1>')
//     }
// })

router.use('/jokes', require('./api/jokesRoutes'))

// error handling
router.use((req, res, next)=> {
    res.status(404)
    .render('pages/404', {
        title: '404 Error',
        name: '404 Error. This page does not exist...'
    })
})

module.exports = router