const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

router.get("/", (req, res)=>{
    res.status(200).json({
        "message": "Hellow world"
    })
})

module.exports = router;