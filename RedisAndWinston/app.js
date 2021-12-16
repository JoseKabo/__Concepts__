import express from 'express'
import router from './routes'
import morgan from 'morgan'

const app = express()

app.use(morgan('combined'));

app.use(router);

app.get('/', (req, res) => {
    res.send({
        message: 'NodeJS Academy w3d2'
    })
})

export default app;