import * as api from '../api/index.js';

export const getVideos = async (req, res) => {

    const query = req.query;

    try {
        const { data }  = !query ? await api.fetchVideos() : await api.fetchVideosOnPage(query.page);

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}