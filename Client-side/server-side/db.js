
const mongoose = require('mongoose');

async function connectToMongo() {
    await mongoose.connect('mongodb://127.0.0.1:27017/inotebook');
    console.log("Connected to Mongo");
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

module.exports = connectToMongo;