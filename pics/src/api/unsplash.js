import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID jygnbGzfpraqWoQZdX2Upp5JFEz5GjPWEjVe86ZLUwQ'
    }
});