import axios from 'axios';
import { serverUrl, VIDEO_ALREADY_EXISTS } from '../config';

/**
 * 
 * @returns {[JSON]} An array of all playlists (each playlist object in json format)
 */
export const fetchPlaylists = async () => {
    try {
        const { data } = await axios.get(`${serverUrl}/playlists`);

        return data.playlists;

    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {string} name The name of the playlist that is about to be created
 * @returns {JSON} A newly-created playlist object (JSON format)
 */
export const createPlaylist = async (name) => {
    try {
        const data = await axios.post(`${serverUrl}/playlists`, { "name": name });

        return data;

    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {string} id The playlist ID
 * @returns {JSON} The playlist object (in JSON format)
 */
export const getPlaylistInfo = async (id) => {
    try {
        const { data } = await axios.get(`${serverUrl}/playlists/${id}`);

        return data;

    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {string} id The ID of the playlist where the video is going to be added
 * @param {JSON} video The video object (json format)
 * @returns {JSON} The updated playlist
 */
export const addVideo = async (id, video) => {
    try {
        const data = await axios.post(`${serverUrl}/playlists/${id}/videos`, video);

        return data;

    } catch (error) {
        console.log(error);

        if (error.response.status == VIDEO_ALREADY_EXISTS) {
            return error.response.status;
        }
    }
}


/**
 * 
 * @param {string} id The ID of the playlist where the video is going to be deleted
 * @param {string} video_id The video_id of the video that is going to be deleted
 */
export const removeVideo = async (id, video_id) => {
    try {
        await axios.delete(`${serverUrl}/playlists/${id}/videos`, { data: { "video_id": video_id }});

    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {string} id The ID of the playlist where the videos are going to be reordered
 * @param {[JSON]} videos The updated videolists
 */
export const reorderVideos = async (id, videos) => {
    try {
        const data = await axios.patch(`${serverUrl}/playlists/${id}/videos`, { "videos": videos });

    } catch (error) {
        console.log(error);
    }
}