const express = require("express");
const cors = require("cors");
const {CORS_ORIGIN} = process.env;
const app = express();
// require('dotenv').config();
const PORT = 8080
const videoRoute = require("./routes/videoRoutes");

app.use("/videos", videoRoute )
app.use(cors({origin:CORS_ORIGIN}))
app.use(express.json())
app.use(express.static("public"))

app.listen( PORT , ()=> {
    console.log(`listening on port ${PORT}`)
})
