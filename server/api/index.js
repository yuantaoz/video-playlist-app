import axios from 'axios';

const BASE_URL = 'https://mock-youtube-api.herokuapp.com/api/';

export const fetchVideos = () => axios.get(`${BASE_URL}/videos`);

export const fetchVideosOnPage = (page) => axios.get(`${BASE_URL}/videos?page=${page}`);