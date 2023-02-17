import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navigation'

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout