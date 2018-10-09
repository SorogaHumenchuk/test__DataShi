const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors({origin: '*'}));
app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({     
  extended: true
})); 
app.use((request, response, next) => {
    console.log(request.headers)
    next()
})
app.use((request, response, next) => {
    request.chance = Math.random()
    next()
})
app.post('/registration', (request, response) => {
    console.log(request.body);
    response.end(JSON.stringify(request.body));
})
app.listen(8000)