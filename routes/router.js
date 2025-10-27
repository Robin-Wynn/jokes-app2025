const express = require('express')
const router = express.Router()

// http://localhost:3001
router.get('/', (req, res)=> {
    res.send('⚙️ Working...⚙️')
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

router.use((req, res, next)=> {
    res.status(404).send("404 Error. This page does not exist.")
})

module.exports = router