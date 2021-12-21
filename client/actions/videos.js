import axios from 'axios';
import { serverUrl } from '../config';


/**
 * 
 * @returns {[JSON]} An array of all the video fetched
 */
export const getVideos = async () => {
    try {
        const { data } = await axios.get(serverUrl);

        return data.videos;
        
    } catch (error) {
        console.log(error);
    }
    
}