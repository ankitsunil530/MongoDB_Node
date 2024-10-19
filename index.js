const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('./db.js');
require('dotenv').config();

const object = {
    name: "sunil",
    age: 21,
    city: "pune",
    country: "india"
}
app.use(bodyParser.json());

const str = JSON.stringify(object);
app.get('/', (res, req) => {

    req.send("Home");
})
const mobileRoutes=require('./routes/mobileRoutes');
app.use('/mobile',mobileRoutes);
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);

const PORT=process.env.PORT || 8000
app.listen(8000, () => {
    console.log("Server listening on port 8000");
})