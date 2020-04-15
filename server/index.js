require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const middleware = require('./middleware/middleware')
const authCtrl = require('./controllers/authController')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

const app = express()

app.use(express.json())


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

app.post('/auth/register', middleware.checkEmail, authCtrl.register)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => console.log(`Take us to warp ${SERVER_PORT}!`))
    console.log('db connected')
})