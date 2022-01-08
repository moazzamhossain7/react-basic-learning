import { useReducer } from 'react';

const initialState = {
    counter: 5,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { counter: state.counter + 1 };
        case 'decrement':
            return { counter: state.counter - 1 };
        default:
            return state;
    }
};

function CounterTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{state.counter}</h1>
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: 'increment',
                    })
                }
            >
                Increment
            </button>
            &nbsp;
            <button
                type="button"
                onClick={() =>
                    dispatch({
                        type: 'decrement',
                    })
                }
            >
                Decrement
            </button>
        </div>
    );
}

export default CounterTwo;
