import axios from 'axios';

const getAllProducts = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}