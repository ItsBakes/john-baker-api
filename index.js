const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8080
const videoRoute = require("./routes/videoRoutes");
const fs = require("fs");

app.use(cors());
app.use(express.json());
app.use("/public/images", express.static("public/images"));

app.use("/videos", videoRoute );

app.listen( PORT , ()=> {
    console.log(`listening on port ${PORT}`)
})
