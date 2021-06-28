const token = localStorage.getItem('token');

export const headers = {
    'Content-Type': 'multipart/form-data',
    'Access-Control-Allow-Credentials': true,
    'Authorization': `Bearer ${token}`,
}