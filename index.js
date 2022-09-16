const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const router = require('./routes/index')

app.use('/api',router)

app.use('/',(req,res)=>{
    res.send(`<h1>ITS HOME PAGE ENTER /api AFTER ADDRESS TO DO OPERATION</h1>`)
});

app.listen(5000,()=>{
    console.log('server started on port 5000')
})