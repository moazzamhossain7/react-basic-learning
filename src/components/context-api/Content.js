import Counter from '../render-prop/Counter';
import ThemeContext from './contexts/themeContext';
import HoverCounter from './HoverCounter';

export default function Content() {
    return (
        <div>
            <h2>This is content component</h2>
            <Counter>
                {(count, incrementCount) => (
                    <ThemeContext.Consumer>
                        {({ theme }) => (
                            <HoverCounter
                                theme={theme}
                                count={count}
                                incrementCounter={incrementCount}
                            />
                        )}
                    </ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    );
}
