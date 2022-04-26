import axios from "axios";

const apiRick = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
    headers: {
        
        'content-type': 'application/json;charset=utf-8',
    }
})


export default apiRick