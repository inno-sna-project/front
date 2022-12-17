const axios = require('axios');

export async function getAllUsers() {
    axios.defaults.baseURL = 'https://snaback.teawide.xyz';              // dirty hack, nothing to see here
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';  // dirty hack, nothing to see here

    const response = await axios.get('/api/dropped_students');
    return response.data;
}

export async function createUser(data) {
    axios.defaults.baseURL = 'https://snaback.teawide.xyz';              // dirty hack, nothing to see here
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';  // dirty hack, nothing to see here

    const response = await axios.post(`/api/add_dropped_student`, data);
    return response.data;
}
