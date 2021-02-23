const yup = require('yup');

const Users = require('../models/Users');

module.exports = {
    async register(req, res) {
        const schema = yup.object().shape({
            name: yup
                .string('Campo Nome deve ser informado em string!')
                .required('Campo Nome é obrigatório!'),
            email: yup
                .string('Campo Email deve ser informado em string!')
                .email('Campo Email deve ser informado como email!')
                .required('Campo Nome é obrigatório!'),
            password: yup
                .string('Campo Senha deve ser informado em string!')
                .required('Campo Senha é obrigatório!'),
            confirm_password: yup
                .string('Campo de confirmação de senha deve ser informado em string!')
                .oneOf([yup.ref('password')], 'Senhas devem ser iguais!'),
        });

        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json({ message: error.errors[0] });
        }

        const userExists = await Users.findOne({ where: { email: req.body.email } });

        if (userExists) {
            return res.status(400).json({ message: 'Usuário já cadastrado!' });
        }

        const { name, email, password } = req.body;

        await Users.create({ name, email, vpassword: password });

        return res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    },

    async selectOne(req, res) {
        const user = await Users.findOne({
            attributes: ['name', 'email', 'avatar', 'url'],
            where: {
                id: req.session.userId
            }
        });

        return res.status(200).json(user);
    },

    async avatar(req, res) {
        const { filename } = req.file;

        await Users.update(
            { avatar: filename },
            { where: { id: req.session.userId } }
        );

        return res.status(201).json({ message: 'Avatar cadastrado com sucesso!' });
    }
}