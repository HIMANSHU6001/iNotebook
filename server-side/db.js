
const mongoose = require('mongoose');

async function connectToMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/inotebook');
    console.log("Connected to Mongo");
    }

module.exports = connectToMongo;