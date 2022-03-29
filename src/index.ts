import express from 'express'
import path from 'path'

const app = express()
app.use(express.static(path.join(__dirname, '../public')))

app.get('/paper', (req, res) =>{
    res.sendFile('index.html', {root: './pages'})
})


app.get('/work', (req, res) =>{
    res.sendFile('index.html', {root: './pages'})
})

app.get('/about', (req, res) =>{
    res.sendFile('index1.html', {root: './pages'})
})


app.get('/blog', (req, res) =>{
    res.sendFile('index2.html', {root: './pages'})
})

app.get('/contact', (req, res) =>{
    res.sendFile('index3.html', {root: './pages'})
})




app.listen(8080, () =>{
    console.log('server ishga tushdi, 8080 portda');
})