import React, { useEffect } from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Layout from '../Components/Layout'
import Game from '../Pages/Game'
import HomePage from '../Pages/Home'
import BlockPage from '../Pages/Home/BlockPage'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Store/Actions/UserActions'
import Games from '../Pages/Games'
import Collection from '../Pages/Collection'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'reviews',
                element: <div>reviews</div>
            },
            {
                path: 'games',
                element: <Games />
            },
            {
                path: 'blog',
                element: <div>blog</div>
            },
            {
                path: 'profile',
                element: <div>blog</div>
            },
            {
                path: 'profile/:id',
                element: <div>blog</div>
            },
            {
                path: 'game/:id',
                element: <Game />
            },
            {
                path: 'article/:id',
                element: <Game />
            },
            {
                path: 'review/:id',
                element: <Game />
            },
            {
                path: 'collection',
                element: <Collection />
            }
        ],
    },
  ])

const Router = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {
    }, [])

    return <React.StrictMode>
        {localStorage.getItem('token') ?
            <RouterProvider router={router} /> :
            <BlockPage />
        }
    </React.StrictMode>
  
}

export default Router