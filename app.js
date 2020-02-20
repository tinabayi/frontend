const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.static('./public'));
app.listen(4000,()=>{
    console.log('running server on 4000 port')
})