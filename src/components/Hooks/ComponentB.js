import { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { CounterContext } from '../../App';

export default function ComponentB() {
    const context = useContext(CounterContext);

    return (
        <div>
            <button
                type="button"
                onClick={() =>
                    context.counterDispatch({
                        type: 'increment',
                        value: 5,
                    })
                }
            >
                Increment
            </button>
            &nbsp;
            <button
                type="button"
                onClick={() =>
                    context.counterDispatch({
                        type: 'decrement',
                        value: 5,
                    })
                }
            >
                Decrement
            </button>
        </div>
    );
}
