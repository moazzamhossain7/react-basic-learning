/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useCallback, useMemo, useState } from 'react';
import Button from './components/Hooks/Button';
import ShowCount from './components/Hooks/ShowCount';
import Title from './components/Hooks/Title';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = useCallback(() => {
        setCount1((prevCount) => prevCount + 1);
    }, []);

    const incrementByFive = useCallback(() => {
        setCount2((prevCount) => prevCount + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 10000) {
            console.log(i);
            i += 1;
        }

        return count1 % 2 === 0;
    }, [count1]);
    return (
        <div className="appName">
            <Title />
            <ShowCount count={count1} title="Counter One" />
            <Button incrementCount={incrementByOne}>Increment By One</Button>
            <p>{isEvenOrOdd ? 'Even' : 'Odd'}</p>
            <hr />
            <ShowCount count={count2} title="Counter Two" />
            <Button incrementCount={incrementByFive}>Increment By Five</Button>
        </div>
    );
}

export default App;
