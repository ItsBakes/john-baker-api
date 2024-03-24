const express = require("express");
const router = express.Router
const cors = require('cors')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
const videoRoute = require('./routes/videoRoutes');

app.use('/videos', videoRoute )
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.listen( PORT , ()=> {
    console.log(`listening on port ${PORT}`)
})
