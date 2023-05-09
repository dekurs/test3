const express = require('express')

const usersRoutes = require('./routes/users')

const middlewareLoqRequest = require('./middleware/logs')

const app = express()

app.use(middlewareLoqRequest)
app.use(express.json())

app.use('/users', usersRoutes)

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000')
})