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
    getCollection = (userId) => client.get(`users/${userId}/collection`)

    getComments = (parentId) => client.get(`comments/${parentId}`)
    postComment = (parentId, data) => client.post(`comments/${parentId}`, {content: data})

    getGames = () => client.get('game')
    getGame = (gameId) => client.get(`game/${gameId}`)

    getRating = (gameId, userId) => client.get(`game/${gameId}/rate/${userId}`)
    getOwnRating = (gameId) => client.get(`game/${gameId}/rate`)
    postRating = (gameId, payload) => client.post(`game/${gameId}/rate`, payload)
}

export default client