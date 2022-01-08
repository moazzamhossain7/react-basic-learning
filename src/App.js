/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import Clock from './components/Hooks/Clock';

class App extends React.Component {
    state = {
        show: true,
    };

    changeToggle = () => {
        this.setState((prevState) => ({
            show: !prevState.show,
        }));
    };

    render() {
        const { show } = this.state;

        return (
            <div className="appName">
                {show && <Clock />}
                <br />
                <button type="button" onClick={this.changeToggle}>
                    Toggle
                </button>
            </div>
        );
    }
}

export default App;
