import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID W9VPWZuq0NFKM97_Pf3xAQS6TvYU8ELXzgG0WcX0HN0'
  }
});
