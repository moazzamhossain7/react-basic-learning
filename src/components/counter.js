import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const updateCounter = () => {
        setCount(count + 1);
    // };

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={setCount(count + 1)}>
                Increment 1
            </button>
            <button type="button">Increment 5</button>
        </div>
    );
}

export default Counter;
