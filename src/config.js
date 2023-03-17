const config = {
    apiDefaultURL: 'http://localhost:3000/v1/' ||  process.env.GAME_RATE_APP_API_URL,
    apiTimeout: 35000 || process.env.GAME_RATE_API_TIMEOUT,
    appDefaultURL: process.env.GAME_RATE_PUBLIC_URL,
}

export default config