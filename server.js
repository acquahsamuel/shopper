const express = require('express');
const app = express();

const PORT = process.env.PORT || 52000;

app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT} `)
});

