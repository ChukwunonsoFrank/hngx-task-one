import express from 'express'
import cors from 'cors'
import userRoutes from '../routes/v1/user.route.js'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/v1', userRoutes)

export default app