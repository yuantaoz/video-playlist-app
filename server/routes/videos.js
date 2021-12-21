import express from 'express';

import { getVideos } from '../controller/videos.js';

const router = express.Router();

router.get('/', getVideos);

export default router;