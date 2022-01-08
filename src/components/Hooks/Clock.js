import { useEffect, useState } from 'react';

function Clock() {
    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const trick = () => {
        setDate(new Date());
    };

    useEffect(() => {
        console.log('Click Updated');
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('clock updated');
        const interval = setInterval(trick, 1000);
        // setInterval(trick, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <button type="button" onClick={handleClick}>
                Increment {count} times
            </button>
        </div>
    );
}

export default Clock;
