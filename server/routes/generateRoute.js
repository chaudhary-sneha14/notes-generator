import express from 'express'
import { generateNotesController } from '../Controller/generatorController.js';
import isAuth from '../middleware/isAuth.js';
import { getMyNotes, getSingleNotes } from '../Controller/notesController.js';


const geminiRouter=express.Router();  

geminiRouter.post('/generate-notes',isAuth,generateNotesController)
geminiRouter.get('/getnotes',isAuth,getMyNotes)
geminiRouter.get('/:id', isAuth, getSingleNotes)

export default geminiRouter;