import React, { useState } from 'react';

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

export default Todo;
