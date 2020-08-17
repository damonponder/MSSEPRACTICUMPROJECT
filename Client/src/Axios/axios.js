import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://wotsafestats.com'
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
