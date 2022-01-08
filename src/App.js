/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useReducer } from 'react';
// eslint-disable-next-line import/no-cycle
import ComponentA from './components/Hooks/ComponentA';
import GetPost from './components/Hooks/GetPost';

export const CounterContext = React.createContext();

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

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="appName">
            <GetPost />
            <h1>{state.counter}</h1>

            <CounterContext.Provider value={{ counterDispatch: dispatch }}>
                <ComponentA />
            </CounterContext.Provider>
        </div>
    );
}

export default App;
