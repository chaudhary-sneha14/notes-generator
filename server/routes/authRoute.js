import express from 'express'
import { googleAuth, logout } from '../Controller/authController.js'

const authRouter=express.Router()
authRouter.post("/google",googleAuth)
authRouter.get("/logout",logout)

export default authRouter