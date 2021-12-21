import mongoose from 'mongoose';
import Playlist from '../models/playlist.js';

export const fetchPlaylists = async (req, res) => {

    try {
        const playlists = await Playlist.find();

        res.status(200).json({ playlists });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlaylist = async (req, res) => {

    const { name } = req.body;
    // console.log(name);

    const newPlaylist = new Playlist({ "name": name });
    
    try {
        await newPlaylist.save();

        console.log(newPlaylist);

        res.status(201).json(newPlaylist);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPlaylistInfo = async (req, res) => {
    
    const { id: _id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const playlist = await Playlist.findById(_id);

    res.json(playlist);
}

export const addVideo = async (req, res) => {
    
    const { id: _id } = req.params;
    const video = req.body;

    // console.log(video);

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const playlist = await Playlist.findById(_id);

    // Deduplication
    const existed = playlist.videos.find((v) => v.video_id === video.video_id);
    if (existed) {
        return res.status(303).send("Already Exists.");
    }

    playlist.videos.push(video);

    const updatedPlaylist = await Playlist.findByIdAndUpdate(_id, playlist);

    res.json(updatedPlaylist);
}

export const removeVideo = async (req, res) => {

    const { id: _id } = req.params;
    const { video_id } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const playlist = await Playlist.findById(_id);

    const updatedVideos = playlist.videos.filter((video) => video.video_id !== String(video_id));

    if (updatedVideos.length === playlist.videos.length) {
        return res.status(404).json({ message: 'No video with that video_id'});
    }

    playlist.videos = updatedVideos;

    await Playlist.findByIdAndUpdate(_id, playlist);

    res.status(200).json({ message: 'Video removed successfully.' });
}

export const reorderVideos = async (req, res) => {

    const { id: _id } = req.params;
    const { videos } = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id');
    }

    const playlist = await Playlist.findById(_id);

    playlist.videos = videos;

    await Playlist.findByIdAndUpdate(_id, playlist);

    res.status(200).json({ message: 'Video reordered successfully.' });
}

