import React from 'react';
import ReactDOM from 'react-dom';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

let stateIndex = -1;
const states = [];

function useState(defaultValue) {
    // eslint-disable-next-line no-plusplus
    const index = ++stateIndex;

    if (states[index]) return states[index];

    const setValue = (updateValue) => {
        console.log(index);
        states[index][0] = updateValue;
        // eslint-disable-next-line no-use-before-define
        init();
    };

    const returnArray = [defaultValue, setValue];
    states[index] = returnArray;
    return returnArray;
}

function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const changeTodo = (e) => {
        const inputValue = e.target.value;
        const updateWarning = inputValue.includes('js')
            ? 'Do you have JavaScript Experience!'
            : 'Good Choice!';

        setTodo(inputValue);
        setWarning(updateWarning);
    };

    return (
        <div>
            <p>{todo}</p>
            <input type="text" value={todo} onChange={changeTodo} />
            <br />
            <h1>{warning}</h1>
        </div>
    );
}

function init() {
    stateIndex = -1;
    ReactDOM.render(<Todo />, document.getElementById('root'));
}

init();
