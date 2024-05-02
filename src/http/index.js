import axios from 'axios'

export const API_URL = 'https://gateway.scan-interfax.ru'

const $api = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json "
    }

})
$api
    .interceptors
    .request
    .use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

        return config;
    })

$api
    .interceptors
    .response
    .use((config) => {
        return config;
    }, async (error) => {
       
        if (error.response.status === 415 && error.response.config.url === "/api/v1/objectsearch/histograms") {
            window
                .history
                .go(-1)
            console.log("bbbbbback", error.response)
            const response = await axios.get('/api/v1/account/info')
            console.log(response)
        }
    })

export default $api;
