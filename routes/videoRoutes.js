const express = require("express");
const router = express.Router(); 
const fs = require("fs");
const {v4 : uuid} = require("uuid");


function readVideos() {
    const videosData = fs.readFileSync('./data/video-details.json');
    const parsedData = JSON.parse(videosData);
    return parsedData;
}

router.get('/', (_req,res) => {
    const videos = readVideos();
    const videoInfo = videos.map((video) => {
        return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
    }
    })    
    res.json(videoInfo)
});

router.get('/:videoId', (req,res)=>{
    const video = readVideos();
    const singleVid = video.find((vid) => vid.id === req.params.videoId)
    res.json(singleVid)
})

router.post("/", (req,res) =>{
    const newVideo = {
        id: uuid(),
        title: req.body.title,
        channel: "John Baker",
        description: req.body.description,
        image: "http://localhost:8080/public/images/Upload-video-preview.jpg",
        views: 0,
        likes: 0,
        duration: 0,
        timestamp: Date.now(),
        comments:[{}]
    };
    const videos = readVideos();
    videos.push(newVideo);
    fs.writeFileSync("./data/video-details.json", JSON.stringify(videos));
    res.status(201).json(newVideo)
})

module.exports = router;