import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import './assets/css/dark.css';
import GlobalStyle from './styled-component/styled/Global.styles';
import Theme from './styled-component/Theme';
import Tutorial from './styled-component/Tutorial';

export default function App() {
    const [theme, setTheme] = useState('dark');

    const handleClick = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <>
            <GlobalStyle />
            <Theme change={handleClick} />
            <ThemeProvider theme={{ type: theme }}>
                <Tutorial />
            </ThemeProvider>
        </>
    );
}
