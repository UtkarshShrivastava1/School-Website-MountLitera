const mongoose = require('mongoose');

const disclosureSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    fileUrl: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Disclosure', disclosureSchema);