const yup = require('yup');

const Users = require('../models/Users');

module.exports = {
    async create(req, res) {
        const schema = yup.object().shape({
            email: yup
                    .string('Campo Email deve ser informado em string!')
                    .email('Campo Email deve ser informado como email!')
                    .required('Campo Nome é obrigatório!'),
            password: yup
                        .string('Campo Senha deve ser informado em string!')
                        .required('Campo Senha é obrigatório!')
        });

        try {
            await schema.validate(req.body);
        } catch (error) {
            return res.status(400).json({ message: error.errors[0] });
        }

        const user = await Users.findOne({ where: { email: req.body.email } });

        if(!user) {
            return res.status(401).json({ message: 'Usuário não cadastrado!' });
        }

        if(!(await user.checkPass(req.body.password))) {
            return res.status(401).json({ message: 'Senha informada com erro!' });
        }

        req.session.userId = user.id;
        return res.status(200).json({ message: 'Usuário logado com sucesso!' });
    },

    async logout(req, res) {
        req.session.destroy();

        return res.status(200).json();
    }
}