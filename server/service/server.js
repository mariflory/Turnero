'use strict'

const express = require('express');
const PORT = process.env.PORT;

//App
const app = express();


//Message to show in http://localhost:8000
app.get('/',(req,res)=>{
    res.status(200).send("espera por tu turno o tomatelas");
});


app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`);
})
