import React from 'react';
import Counter from '../render-prop/Counter';
import ThemeContext from './contexts/themeContext';
import HoverCounter from './HoverCounter';

// export default class Content extends React.Component {
export default function Content() {
    console.log('Content component rendered');
    const context = React.useContext(ThemeContext);
    const { theme, switchTheme } = context;

    return (
        <div>
            <h2>This is content component</h2>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                        theme={theme}
                        count={count}
                        incrementCounter={incrementCount}
                        switchTheme={switchTheme}
                    />
                )}
            </Counter>
        </div>
    );
}

// Content.contextType = ThemeContext;
