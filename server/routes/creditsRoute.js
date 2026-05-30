import express from 'express'
import { createCreditsOrder } from '../Controller/creditsController.js';
import isAuth from '../middleware/isAuth.js';

const creditRouter=express.Router();

creditRouter.post("/order", isAuth , createCreditsOrder);

export default creditRouter;