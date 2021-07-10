import axios from "axios";

const http = axios.create({
    baseURL: 'http://frontend-store:3000/api'
});

export default http;