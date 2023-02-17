import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import Layout from '../Components/Layout'
import Game from '../Pages/Game'
import HomePage from '../Pages/Home'

const router = createBrowserRouter([
    {
        path: '/GameRate',
        element: <Layout />,
        children: [
            {
                path: '/GameRate',
                element: <HomePage />
            },
            {
                path: 'reviews',
                element: <div>reviews</div>
            },
            {
                path: 'games',
                element: <Game />
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
                path: 'profile/:id/',
                element: <div>blog</div>
            },
            {
                path: 'game/:id/',
                element: <Game />
            },
            {
                path: 'article/:id/',
                element: <Game />
            },
            {
                path: 'review/:id/',
                element: <Game />
            }
        ],
    },
  ])

const Router = () => 
    <React.StrictMode>  
        <RouterProvider router={router} />
    </React.StrictMode>
  

export default Router