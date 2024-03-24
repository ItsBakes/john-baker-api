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

router.post("/upload", (req,res) =>{
    const newVideo = {
        id: uuid(),
        title: req.body.title,
        channel: req.body.channel,
        description: req.body.description,
        image: req.body.image,
        video: req.body.video,
        timestamp: Date.now(),
    };
    const videos = readVideos();
    videos.push(newVid);
    fs.writeFileSync("./data/video-details.json", json.stringify(videos));
    res.status(201).json(newVideo)
})

module.exports = router;