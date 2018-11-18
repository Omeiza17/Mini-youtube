import axios from 'axios';

const KEY = 'AIzaSyDbxP1Z5OyW_p-sGaTtMnywtfCNfBcncKI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
  }
});
