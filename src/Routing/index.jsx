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
                element: <div>games</div>
            },
            {
                path: 'blog',
                element: <div>blog</div>
            },
            {
                path: 'game/:id/',
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