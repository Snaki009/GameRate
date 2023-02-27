import axios from 'axios'
import Config from '../config'

const client = axios.default.create({
    baseURL: Config.apiDefaultURL,
    timeout: Config.apiTimeout, 
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
})

export class ApiClient {

    login = (params) => client.post('auth/login', params)
    
    getUsers = () => client.get('users')

    getComments = (parentId) => client.get(`comments/${parentId}`)
    postComment = (parentId, data) => client.post(`comments/${parentId}`, {content: data})
}

export default client