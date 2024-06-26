const connectToMongo = require('./db');
connectToMongo();

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors(
  {
    origin: ["i-notebook-nruhdffz9-himanshus-projects-c36af860.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true
  }
))

const port = 5000
app.use(express.json())
// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`)
})