import axios from "axios";

const instance = axios.create({
    baseURL: process.env.VUE_APP_BACKEND_API_BASE,
    headers: {
        "Content-type": "application/json"
    }
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        // Этот блок кода срабатывает при ошибках запроса
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    response => {
        // Обработка успешного ответа
        return response;
    },
    error => {
        // Этот блок кода срабатывает при ошибках ответа
        if (error.response && error.response.status === 401) {
            logout();
        }
        return Promise.reject(error);
    }
);
function logout() {
    localStorage.removeItem('authToken');
    window.location.href='/my/auth/login';
}

export default instance;