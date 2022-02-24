import axios from 'axios';

const KEY = 'AIzaSyCOw3Tho6DVWReP7Os7MUXv1bUPYAY-IBY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
});
