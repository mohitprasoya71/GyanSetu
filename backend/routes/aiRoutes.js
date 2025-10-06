import express from 'express'

import {askQuestion,explainInHinglish,summarizeTopic,summarizeChapter,generateMCQs,generateFlashcards} from '../controllers/aiController.js'
const router = express.Router()


router.post('/ask',askQuestion)
router.post('/summarize-topic',summarizeTopic)
router.post('/summarize-chapter',summarizeChapter)
router.post('/mcq',generateMCQs)
router.post('/explain',explainInHinglish)
router.post('/flashcards',generateFlashcards)

export default router