// import Clock from './components/Clock';
// import ClockList from './components/ClockList';
// import Form from './components/Form';
// import Calculator from './components/Calculator';
// import Bracket from './components/composition/Bracket';
// import Emoji from './components/composition/Emoji';
// import Text from './components/composition/Text';

// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';

import ClickCounter from './components/render-prop/ClickCounter';
import Counter from './components/render-prop/Counter';
import HoverCounter from './components/render-prop/HoverCounter';

function App() {
    // const quantities = [1, 2, 3, 4];

    return (
        <div className="appName">
            <Counter>
                {(count, incrementCount) => (
                    <ClickCounter count={count} incrementCounter={incrementCount} />
                )}
            </Counter>

            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter count={count} incrementCounter={incrementCount} />
                )}
            </Counter>
        </div>
    );
}

export default App;
