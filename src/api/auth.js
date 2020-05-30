import axios from 'axios'

class AuthApi {
    static async login(data) {
        return axios.post('/users/login', { ...data })
    }
    static async register(data) {
        return axios.post('/users/register', { ...data })
    }
}

export default AuthApi;