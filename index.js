const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const model = require('./models/index');


const router = require('./routes/index')

app.use('/api',router)

// app.use('/',(req,res)=>{
//     res.send(`<h1>ITS HOME PAGE ENTER /api AFTER ADDRESS TO DO OPERATION</h1>`)
// });
app.post('/test',async (req,res)=>{

    let a= 1;
    
    for (i = a; i < 16; i++) {
        const name = {
            "first_name":`first name ${a}`,
            "last_name":`"last name ${a}"`,
            "email":`"email ${a}"` ,
            "phone_no":`5213${a}`
        };
        console.log('user'+name + i);
       await model.user.create(name);
        a++;
        
    }
});


app.listen(5000,()=>{
    console.log('server started on port 5000')
})