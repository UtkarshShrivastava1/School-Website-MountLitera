const Disclosure = require("../models/disclosure");

const addDisclosure = async (req, res) => {
    try {
        console.log(req.body);
        const { type, title, description } = req.body;
        const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
        console.log("Uploaded file URL:", fileUrl);
        
        const newDisclosure = new Disclosure({
            type, 
            title, 
            description, 
            fileUrl,
            date: new Date() // Automatically set current date
        });
        
        await newDisclosure.save();
        res.status(201).json({
            message: "Disclosure added successfully", 
            disclosure: newDisclosure
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getAllDisclosure = async (req, res) => {
    try {
        const disclosures = await Disclosure.find().sort({ date: -1 });
        res.status(200).json(disclosures);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
} 

module.exports = { addDisclosure, getAllDisclosure };