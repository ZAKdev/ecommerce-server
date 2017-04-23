const mongodb = require("mongodb").MongoClient,
    config = require("./../config/config"),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app = express();

app.use(cors());

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./routes/auth'))
app.use(require('./routes/allitems'))

app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
});