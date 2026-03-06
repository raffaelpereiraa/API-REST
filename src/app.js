import express from 'express'
import routes from './routes.js'

const app = express()

//indicara para o express ler o body com json
app.use(express.json())

//usar or router
app.use(routes)

export default app
