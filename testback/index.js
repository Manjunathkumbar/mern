const express = require("express");

const app = express();

const port = 3000;

const admin=(req, res)=>{
    return res.send("Hi Admin")
}

const isAdmin=(req, res, next)=>{
    console.log("isAdmin running");
    next();
}


app.get('/admin',isAdmin, admin)

app.get('/', (req, res)=>{
    return res.send("your visting home page")
})

app.get('/signup', (req, res)=>{
    return res.send("your visting login route")
})

app.get('/manjunath', (req, res)=>{
    return res.send("Hi Manjunath")
})



app.get('/signout', (req, res)=>{
    return res.send("Your are signed out successfully")
})

app.listen(port, ()=>{
    console.log('server is up and running...')
})

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))