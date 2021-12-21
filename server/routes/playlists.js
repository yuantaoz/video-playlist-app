import express from 'express';

import { fetchPlaylists, createPlaylist, addVideo, removeVideo, reorderVideos, getPlaylistInfo } from '../controller/playlists.js';

const router = express.Router();

router.get('/', fetchPlaylists);
router.post('/', createPlaylist);
router.get('/:id', getPlaylistInfo);
router.post('/:id/videos', addVideo);
router.delete('/:id/videos', removeVideo);
router.patch('/:id/videos', reorderVideos);

export default router;