import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8000", // ✅ Corrected
    headers: {
        'Content-Type': 'application/json',
    }
});
