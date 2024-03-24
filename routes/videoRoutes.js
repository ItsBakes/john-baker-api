const express = require("express");
const router = express.Router(); 
const fs = require("fs");
const uuid = require("uuid");

function readVideos() {
    const videosData = fs.readFileSync('./data/video-details.json');
    const parsedData = JSON.parse(videosData);
    return parsedData;
}

router.get('/', (req,res) => {
    const videos = readVideos();
    console.log(videos);
    res.json(videos)
});

router.get('/video/:videoId', (req,res)=>{
    const video = readVideos();
    const singleVid = video.find((vid) => vid.id === req.params.videoId)
    res.json(singleVid)
})

// add comment for develop branch
