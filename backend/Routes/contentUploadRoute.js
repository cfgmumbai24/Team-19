const express = require("express");
const router1 = require("express").Router();
const cloudinary = require('cloudinary');
const Content1 = require("../Models/contentSchema");
const fs = require('fs');

cloudinary.config({
    cloud_name : process.env.CLOUD_NAME,
    api_key : process.env.CLOUD_API_KEY,
    api_secret : process.env.CLOUD_API_SECRET
});
const uploadedMedia = []; 

router1.post('/upload', async (req, res) => {
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

        cloudinary.v2.uploader.upload(file.tempFilePath, uploadOptions, async (err, result) => {
            if (err) throw err;

            removeTmp(file.tempFilePath);
            const mediaMetadata = { public_id: result.public_id, url: result.secure_url, resource_type: result.resource_type };
            uploadedMedia.push(mediaMetadata);

          
            const { title, username,category,content, location } = req.body;
            const newContent = new Content1({
                title,
                username,
                category,
                content,
                url: result.secure_url,
                location
            });
            const savedContent = await newContent.save();

            res.json(savedContent);
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

router1.get('/uploadGet', async (req, res) => {
    try {
        const { category } = req.query;
        if (!category) {
            return res.status(400).json({ msg: "Category is required" });
        }

        const contents = await Content1.find({ category });

        res.json(contents);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});
const removeTmp = (path) => {
    fs.unlink(path, err => {
        if (err) throw err;
    });
};

module.exports = router1;