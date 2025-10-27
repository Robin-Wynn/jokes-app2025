const express = require('express')
const router = express.Router()

// http://localhost:3001 => home page
router.get('/', (req, res)=> {
    // res.send('⚙️ Working...⚙️')
    res.render('pages/home', {
        title: "Robin's jokes app",
        name: "robin's jokes app!"
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