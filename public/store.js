const mongodb = require("mongodb").MongoClient,
    config = require("./../config/config");

const database = mongodb.connect(config.mongoConnection, config.mongoOptions)

const userLogin = (username, password) => database
    .then(db => db.collection("users").findOne(
            {
                username: username,
                password: password
            }
        )
    )
    .catch(err => console.log(err))

const getAllItems = () => database
    .then(db => db.collection("products").find().toArray());

module.exports = {
    getAllItems,
    userLogin
}