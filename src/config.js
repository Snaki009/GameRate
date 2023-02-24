const config = {
    apiDefaultURL: 'https://api.gamerate.pl:3000/v1/' || process.env.REACT_APP_API_URL,
    apiTimeout: 35000 || process.env.REACT_APP_API_TIMEOUT,
    appDefaultURL: process.env.REACT_APP_PUBLIC_URL,
}

export default config