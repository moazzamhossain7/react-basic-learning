/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ClickCounter from './components/context-api/ClickCounter';
import ThemeContext from './components/context-api/contexts/themeContext';
import Section from './components/context-api/Section';
import Counter from './components/render-prop/Counter';

class App extends React.Component {
    state = {
        theme: 'dark',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    };

    render() {
        const { theme, switchTheme } = this.state;
        console.log('App component rendered');

        return (
            <div className="appName">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCounter={incrementCount} />
                    )}
                </Counter>

                <ThemeContext.Provider value={{ theme, switchTheme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
