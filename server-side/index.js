const connectToMongo = require("./db");
connectToMongo();

var express = require("express");
var cors = require("cors");
var app = express();

const corsOptions = {
  origin: 'https://i-notebook-frontend-cyan.vercel.app', // Frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

const port = 5000;
app.use(express.json());
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNotebook backend listening on port ${port}`);
});
