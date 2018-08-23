const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

const advertisements = require('./routes/api/Advertisements')
const projects = require('./routes/api/Projects')
const app = express();

//use cors
app.use(cors())

//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected.... "))
    .catch(err => console.log(err))

//Use Routes
app.use('/api/advertisements', advertisements)
app.use('/api/projects', projects)


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))