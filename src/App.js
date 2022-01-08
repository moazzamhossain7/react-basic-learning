/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Todo from './components/Hooks/Todo';

class App extends React.Component {
    render() {
        return (
            <div className="appName">
                <Todo />
            </div>
        );
    }
}

export default App;
