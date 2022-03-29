import express from 'express'
const app = express()


app.get('/', (req, res) =>{
    res.sendFile('index.html', {root: './pages'})
})










app.listen(8080, () =>{
    console.log('server ishga tushdi, 8080 portda');
})