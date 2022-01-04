import axios from 'axios';
import { serverUrl } from '../config';


/**
 * 
 * @returns {[JSON]} An array of all the video fetched
 */
export const getVideos = async () => {
    try {
        const data = await getVideosOnPage(1);

        return data;
        
    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @returns {[JSON]} An array of all the video fetched
 */
 export const getVideosOnPage = async (page) => {
    try {
        const { data } = await axios.get(`${serverUrl}?page=${page}`);

        return data.videos;
        
    } catch (error) {
        console.log(error);
    }
}


/**
 * 
 * @param {Number} pageNumber the page number in which query occurs
 * @param {String} query the query
 * @returns {[JSON]} An array of updated videos 
 */
export const searchVideos = async (page, query) => {
    try {
        const { data } = await axios.get(`${serverUrl}/search?page=${page}&query=${query}`);

        return data.videos;

    } catch (error) {
        console.log(error);
    }
}