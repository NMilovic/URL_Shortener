const mongoose = require('mongoose');

const tinyUrlSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    longUrl: {
        type: String,
        unique: true,
        required: true
    },
    tinyUrl: {
        type: String,
        unique: true,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    date: {
        type: String,
        default: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
});

module.exports = mongoose.model('TinyUrl', tinyUrlSchema);
