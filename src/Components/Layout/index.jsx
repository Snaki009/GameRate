import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Navigation'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import styled from 'styled-components'
import { GlobalStyles } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

const themeLight = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: "#ffffff",
            paper: '#efefef'
        }
    }
});

const themeDark = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: "#1c1c1c",
            paper: '#6e6e6e'
        },
        text: {
            primary: "#ffffff"
        }
    }
});
const Layout = () => {
    const [mode, setMode] = React.useState('light');
    const theme = useTheme();
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={mode === 'light' ? themeLight : themeDark}>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        body: { backgroundColor: theme.background },
                    }}
                />
                <div>
                    <Navbar />
                    <Content>
                        <Outlet />
                    </Content>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider >
    )
}

export default Layout

const Content = styled.div`
    padding: 50px 20%;
`