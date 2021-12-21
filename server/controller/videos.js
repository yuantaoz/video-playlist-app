import mongoose from 'mongoose';
import * as api from '../api/index.js';

export const getVideos = async (req, res) => {

    try {
        const { data }  = await api.fetchVideos();

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}