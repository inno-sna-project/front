const axios = require('axios');

export async function getAllUsers() {

    const response = await axios.get('/api/dropped_students');
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/api/add_dropped_student`, {user: data});
    return response.data;
}