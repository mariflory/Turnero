'use strict'

const express = require('express');
const User = require('../user/User');
const Turn = require('../turn/Turn');

//App
const app = express();

const PORT = process.env.PORT;

//Message to show in http://localhost:8000
app.get('/',(req,res)=>{
    res.status(200).send("espera por tu turno o tomatelas");
});

app.use('/turns',Turn);
//app.use('/user',User);

app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
})
