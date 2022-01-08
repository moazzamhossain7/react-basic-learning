/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import ClickCounter from './components/context-api/ClickCounter';
import ThemeContext from './components/context-api/contexts/themeContext';
import Section from './components/context-api/Section';
import Counter from './components/render-prop/Counter';

class App extends React.Component {
    state = {
        theme: 'dark',
    };

    render() {
        const { theme } = this.state;

        return (
            <div className="appName">
                <Counter>
                    {(count, incrementCount) => (
                        <ClickCounter count={count} incrementCounter={incrementCount} />
                    )}
                </Counter>

                <ThemeContext.Provider value={{ theme }}>
                    <Section />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default App;
