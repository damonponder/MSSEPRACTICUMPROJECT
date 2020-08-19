import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://floating-earth-66732.herokuapp.com'
});

instance.defaults.headers.post["Content-Type"] = "application/json";

export default instance;
