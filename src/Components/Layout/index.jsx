import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navigation'
import { ThemeProvider, createTheme } from '@mui/material/styles'

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const Layout = () => {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <div>
                    <Navbar />
                    <Outlet />
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider >
    )
}

export default Layout