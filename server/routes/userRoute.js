import express from 'express'
import { getCurrentUser } from '../Controller/UserController.js'
import isAuth from '../middleware/isAuth.js'

const userRouter=express.Router()
userRouter.get("/currentUser",isAuth,getCurrentUser)


export default userRouter