const moongose = require('mongoose')

const PostSchema = new moongose.Schema({
    owner: String,
    title: String,
    description: String,
    image: String,
    postContent: String,
    tags: [String]
})

module.exports = moongose.model('Post', PostSchema)