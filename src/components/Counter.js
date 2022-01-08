import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const updateCounter = () => {
        let i = 0;
        while (i < 5) {
            setCount((prevCount) => prevCount + 1);
            // eslint-disable-next-line no-plusplus
            i++;
        }
    };

    return (
        <div>
            <p>{count}</p>
            <button type="button" onClick={() => setCount(count + 1)}>
                Increment 1
            </button>
            <br />
            <br />
            <button type="button" onClick={() => updateCounter()}>
                Increment 5
            </button>
        </div>
    );
}

export default Counter;
