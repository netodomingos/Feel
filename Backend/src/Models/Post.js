const moongose = require('mongoose')

const PostSchema = new moongose.Schema({
    owner: String,
    title: String,
    description: String,
    image: String,
    postContent: String,
    tags: [String]
}, {
    toJSON: {
        virtuals: true
    }
})

PostSchema.virtual('image_url').get(function(){
    return `http://192.168.25.12:3333/files/${this.image}`
})

module.exports = moongose.model('Post', PostSchema)