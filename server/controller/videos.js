import * as api from '../api/index.js';
import Video from '../models/video.js';

export const getVideos = async (req, res) => {

    const query = req.query;
    const page = !query ? 1 : query.page;

    try {
        const { data }  = await api.fetchVideosOnPage(page);

        await Video.deleteMany({});

        const promises = data.videos.map(async (video) => {
            const newVideo = new Video({
                "video_id": video.video_id,
                "title": video.title,
                "views": video.views,
                "thumbnail_url": video.thumbnail_url,
                "description": video.description,
                "page": page,
            });

            await newVideo.save();
        });

        await Promise.all(promises);

        res.status(200).json(data);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const searchVideos = async (req, res) => {

    const requestQuery = req.query;
    
    const page = !requestQuery.page ? 1 : requestQuery.page;
    const query = requestQuery.query;

    const queryStrings = query.split(" ");
    const allQueries = [];
    queryStrings.map(() => {
        allQueries.push({ title: { $regex: String(query), $options: "i" }})
    });

    const result = await Video.find({ page: page, $or: allQueries });

    // const allQueries = "me";
    
    // const result = await Video.aggregate([{ $regexMatch: { page: page, title: { $regex: allQueries, $options: "i" }}}]);

    res.status(200).json({ videos: result });
}