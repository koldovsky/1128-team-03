const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
    message:
        {
            type: String,
            required: true,
        }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;
