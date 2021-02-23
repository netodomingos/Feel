const yup = require('yup');

const Tags = require('../models/Tags');

module.exports = {
    async register(req, res) {
        const schema = yup.object().shape({
            tag: yup
                    .string('Campo Tag deve ser informado em string!')
                    .required('Campo Tag é obrigatório!')
        });

        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json({ message: error.errors[0] });
        }

        const tag = await Tags.findOne({ where: { tag: req.body.tag } });

        if(tag) {
            return res.status(401).json({ message: 'Tag já cadastrada!' });
        }

        await Tags.create({ tag: req.body.tag });

        return res.status(201).json({ message: 'Tag cadastrada com sucesso!' });
    },

    async index(req, res) {
        const tags = await Tags.findAll({ attributes: ['id', 'tag'] });

        return res.status(200).json(tags);
    }
}