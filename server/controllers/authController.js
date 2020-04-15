const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')

        console.log(req.session)
        let user = await db.check_user(email)
        if(user[0]){
            return res.status(400).send('Email already exists')
        }

        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        let newUser = await db.register_user(email, hash)


        req.session.user = newUser[0]
        // delete req.session.user.password
        res.status(201).send(req.session.user)
    }
}