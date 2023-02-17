import React from 'react'
import Section from '../../Components/Layout/Section'
import Thumbnail from '../../Components/Thumbnail'
import GameThumbnail from '../../Components/Thumbnail/Game'

const mockNews = [
    {
        title: 'HARDWARE REVIEW: PLAYSTATION VR2',
        date: '01/01/2022 01:11',
        commentsCount: 5,
        game: {
            title: 'Hogwarts Legacy',
            score: '50',
        },
        short: 'Blablablabla abka bla bkab ak bakbk a',
        mainImg: 'https://static.metacritic.com/images/home_banner/1676569979_1_3.jpg',
        author: 'noname'
    }, {
        title: 'news2',
        date: '01/01/2022 01:11',
        commentsCount: 5,
        game: {
            title: 'Hogwarts Legacy',
            score: '50',
        },
        short: 'Blablablabla abka bla bkab ak bakbk a',
        mainImg: 'https://static.metacritic.com/images/home_banner/1676599843_3_2.jpg   ',
        author: 'noname'
    }, {
        title: 'news3',
        date: '01/01/2022 01:11',
        commentsCount: 5,
        game: {
            title: 'Hogwarts Legacy',
            score: '50',
        },
        short: 'Blablablabla abka bla bkab ak bakbk a',
        mainImg: 'https://static.metacritic.com/images/home_banner/1676512114_1_3.jpg',
        author: 'noname'
    },
]

const mockGames = [
    {
        mainImg: 'https://s1.gaming-cdn.com/images/products/4824/orig-fallback-v1/elden-ring-pc-game-steam-europe-cover.jpg?v=1650985585',
        name: 'Elden Ring',
        score: 45,
    },
    {
        mainImg: 'https://s1.gaming-cdn.com/images/products/4824/orig-fallback-v1/elden-ring-pc-game-steam-europe-cover.jpg?v=1650985585',
        name: 'Elden Ring',
        score: 45,
    },
    {
        mainImg: 'https://s1.gaming-cdn.com/images/products/4824/orig-fallback-v1/elden-ring-pc-game-steam-europe-cover.jpg?v=1650985585',
        name: 'Elden Ring',
        score: 45,
    },
    {
        mainImg: 'https://s1.gaming-cdn.com/images/products/4824/orig-fallback-v1/elden-ring-pc-game-steam-europe-cover.jpg?v=1650985585',
        name: 'Elden Ring',
        score: 45,
    },
    {
        mainImg: 'https://s1.gaming-cdn.com/images/products/4824/orig-fallback-v1/elden-ring-pc-game-steam-europe-cover.jpg?v=1650985585',
        name: 'Elden Ring',
        score: 45,
    },
    {
        mainImg: 'https://s1.gaming-cdn.com/images/products/4824/orig-fallback-v1/elden-ring-pc-game-steam-europe-cover.jpg?v=1650985585',
        name: 'Elden Ring',
        score: 45,
    },
]

const HomePage = () => {
    return (
        <>
            <Section header="Nowe">
                {mockNews.map(news => <Thumbnail data={news}/>)}
            </Section>
            <Section header="Trending games">
                {mockGames.map(game => <GameThumbnail data={game}/>)}
            </Section>
        </>
    )
}

export default HomePage 