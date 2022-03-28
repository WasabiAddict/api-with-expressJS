const express = require('express');
const apiRouter = require('./routes');
const port = 3000;
const app = express();

app

app.use('/api', apiRouter);



app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});