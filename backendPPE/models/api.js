const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: true
    }
});

forumSchema.index({ "$**": 'text' });

module.exports = mongoose.model('Forum', forumSchema);