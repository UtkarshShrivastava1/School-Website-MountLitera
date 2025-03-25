// import disclosure from "../models/disclosure";
const disclosure = require("../models/disclosure")


const addDisclosure = async(req,res)=>{
    try {
        console.log(req.body);
        const {type, title, description} = req.body;
        const fileUrl = req.file? `/uploads/${req.file.filename}`: null;
        console.log("Uploaded file URL:", fileUrl);
        const newDisclosure = new disclosure({type, title, description, fileUrl});
        await newDisclosure.save();
        res.status(201).json({message: "Disclosure added successfully", disclosure: newDisclosure});
    } catch (error) {
    res.status(500).json({ error: error.message });
        // console.log(error.message);
    }
}

module.exports = addDisclosure;