const express = require("express");
const router1 = require("express").Router();
const cloudinary = require('cloudinary');

const fs = require('fs');

cloudinary.config({
    cloud_name:"dhtk9tq1t",
    api_key: ,
    api_secret: ""
});
const uploadedMedia = []; 

router1.post('/upload', (req, res) => {
    try {
        if (!req.files || Object.keys(req.files).length === 0)
            return res.status(400).send({ msg: "No files were uploaded" });

        console.log(req.files);
        const file = req.files.file;
        if (file.size > 1024 * 1024 * 50) { 
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "Size too large" });
        }

        if (!['image/jpeg', 'image/png', 'video/mp4'].includes(file.mimetype)) {
            removeTmp(file.tempFilePath);
            return res.status(400).json({ msg: "File format is incorrect" });
        }

        const uploadOptions = { folder: 'test' };
        if (file.mimetype.startsWith('video/')) {
            uploadOptions.resource_type = 'video'; 
        }

        cloudinary.v2.uploader.upload(file.tempFilePath, uploadOptions, (err, result) => {
            if (err) throw err;

            removeTmp(file.tempFilePath);
            const mediaMetadata = { public_id: result.public_id, url: result.secure_url, resource_type: result.resource_type };
            uploadedMedia.push(mediaMetadata); // Store media metadata

            res.json(mediaMetadata);
        });
       
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
router1.get('/images', (req, res) => {
    res.json(uploadedImages); // Return the list of uploaded images
});

const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    });
};
module.exports = router1;