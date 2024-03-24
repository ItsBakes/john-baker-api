const express = require("express");
const router = express.Router
const cors = require('cors')
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

app.use(cors())
app.use(express.json())
app.use()

app.listen( PORT , ()=> {
    console.log(`listening on port ${PORT}`)
})













module.exports = router;