import express from 'express'
import controller from '../../controllers/user.controller.js'
const Router = express.Router()

Router.get('/user', controller.index)

export default Router