const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
app.use(morgan());
const router = express.Router();

//base route
app.get('/', (req, res) => {
    fs.readFile('./views/index.html', (err, data) => {
        if(err) {
            res.send('<h1>Error Occurred</h1>');
        } else {
            res.write(data);
            res.end();
        }
    });
});

app.listen(4000, () => {
    console.log('Server is listening on PORT 4000');
});