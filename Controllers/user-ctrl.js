const users = require('../Models/user-model');
const bcrypt = require('bcryptjs');
module.exports = {
    register: async (req, res) => {
        if (users.exists(req.body.email)) return res.status(400).send({ message: 'email is connected' })
        bcrypt.hash(req.body.password, 10, (err, hashPassword) => {
            if (err) return res.status(500).send({ message: 'error' });
            req.body.password = hashPassword;
            await users.create(req.body)
                .then(result => res.status(200).send({ message: "user added successfull" }))
                .catch(err => res.status(500).send(err))
        })
    }
}

