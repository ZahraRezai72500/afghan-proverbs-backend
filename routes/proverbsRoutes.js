import express from 'express';
import { getRandomProverb, getAllProverbs } from '../controller/proverbsController.js';

const router = express.Router();

router.get('/', getAllProverbs);
router.get('/random',getRandomProverb);

export default router;