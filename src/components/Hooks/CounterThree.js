import { useReducer } from 'react';

const initialState = {
    counter: 5,
    counter2: 0,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.value };
        case 'decrement':
            return { ...state, counter: state.counter - action.value };
        case 'increment2':
            return { ...state, counter2: state.counter2 + action.value };
        case 'decrement2':
            return { ...state, counter2: state.counter2 - action.value };
        default:
            return state;
    }
};

function CounterThree() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>
                <h1>{state.counter}</h1>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
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
                        dispatch({
                            type: 'decrement',
                            value: 5,
                        })
                    }
                >
                    Decrement
                </button>
            </div>

            <div>
                <h1>{state.counter2}</h1>
                <button
                    type="button"
                    onClick={() =>
                        dispatch({
                            type: 'increment2',
                            value: 1,
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
                            type: 'decrement2',
                            value: 1,
                        })
                    }
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default CounterThree;
