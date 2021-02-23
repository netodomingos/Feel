const yup = require('yup');

const Post = require('../models/Post');
const Tags = require('../models/Tags');
const Users = require('../models/Users');

module.exports = {
    async index(req, res) {
        const posts = await Post.findAll({
            attributes: ['id', 'title', 'description', 'image', 'url', 'postcontent'],
            include: [
                {
                    model: Tags,
                    attributes: ['tag']
                },
                {
                    model: Users,
                    as: 'users',
                    attributes: ['name']
                }
            ]
        });

        return res.json(posts)
    },

    async listTag(req, res) {
        const posts = await Post.findAll({
            attributes: ['id', 'title', 'description', 'image', 'url', 'postcontent'],
            include: [
                {
                    model: Tags,
                    attributes: ['tag'],
                    where: {
                        id: req.params.tag
                    }
                },
                {
                    model: Users,
                    as: 'users',
                    attributes: ['name']
                }
            ]
        });

        return res.status(200).json(posts);
    },

    async listOne(req, res) {
        const posts = await Post.findAll({
            attributes: ['title', 'description', 'image', 'url', 'postcontent'],
            where: {
                id: req.params.id
            },
            include: [
                {
                    model: Tags,
                    attributes: ['tag']
                },
                {
                    model: Users,
                    as: 'users',
                    attributes: ['name']
                }
            ]
        });

        return res.status(200).json(posts);
    },

    async store(req, res) {
        const schema = yup.object().shape({
            title: yup
                .string('Campo Titulo deve ser informado em string!')
                .required('Campo Tilulo é obrigatório!'),
            description: yup
                .string('Campo Descrição deve ser informado em string!')
                .required('Campo Descrição é obrigatório!'),
            postcontent: yup
                .string('Campo Conteudo deve ser informado em string!')
                .required('Campo Conteudo é obrigatório!'),
        });

        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json({ message: error.errors[0] });
        }

        const { filename } = req.file
        const { title, description, postcontent, tags } = req.body

        const post = await Post.create({
            title,
            description,
            image: filename,
            postcontent,
            userid: req.session.userId,
        });
        await post.addTag(tags);

        return res.status(201).json({ message: 'Post cadastrado com sucesso!' });
    }
}