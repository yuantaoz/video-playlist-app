import axios from 'axios';

const BASE_URL = 'https://mock-youtube-api.herokuapp.com/api/';

export const fetchVideos = () => axios.get(`${BASE_URL}/videos`);