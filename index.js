// const http = require('http')
// const server = http.createServer((req, res) => {

// })

// server.listen(3000)

// const express = require('express')
// const app = express()
// app.use(express.static('public'))

// app.listen(3000, () => {
//     console.log("App listening on port 300")

// })

// app.get('/', (req,res) => {
//     res.json({
//         name: "isaac park"
//     })
// })
// app.get('/about', (req, res) => {
//     res.json({
//         name: 'isaac park'
//     })
// })

// const path = require('path')

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'))

// })

// app.get('/contact', (req,res)=> {
//     res.sendFile(path.resolve(__dirname, 'contact.html'))

// })



// chapter 4 
const express = require('express')
const app = new express()
app.use(express.static('public'))


app.listen(4000, ()=> {
    console.log('app listening on port 4000')

})