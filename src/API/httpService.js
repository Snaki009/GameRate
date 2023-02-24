import axios from 'axios'
import Config from '../config'

const client = axios.default.create({
    baseURL: Config.apiDefaultURL,
    timeout: Config.apiTimeout,
})

export class ApiClient {
    login = (params) => client.post('auth/login', params)
    getUsers = () => client.get('users')
}

export default client