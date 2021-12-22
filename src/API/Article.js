import axios from 'axios';
const Fetch_data = axios.create({
    baseURL : 'https://www.enanyang.my/api/get/home/articles'
})
export default Fetch_data;

// https://www.enanyang.my/api/get/home/articles?page=11