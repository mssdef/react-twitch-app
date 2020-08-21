import axios from 'axios';

const KEY='AIzaSyAifT9EfT3li4rB3W6XHDL3emYvyIsJUCw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
