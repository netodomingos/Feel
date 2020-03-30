const Post = require('../Models/Post')

module.exports = {
    async index(req, res){
        const posts = await Post.find()

        return res.json(posts)
    },
    
    async store(req, res){
        const { filename } = req.file
        const { owner, title, description, postContent, tags } = req.body

        const post = await Post.create({
            owner,
            title,
            description,
            image: filename,
            postContent,
            tags: tags.split(',').map(tag => tag.trim())
        })

        return res.json(post)
    }
}