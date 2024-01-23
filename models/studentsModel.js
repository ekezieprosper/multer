const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    department: {
        type: String,
        enum: ['Backend', 'Frontend'],
        required: true
    },
    photos: {
        type: Array,
        required: true
    }
}, {timestamps: true})


const database = mongoose.model('User', userSchema);

module.exports = database
