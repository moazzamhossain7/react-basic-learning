import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    };

    incrementCounter = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    render() {
        const { children } = this.props;
        const { count } = this.state;

        return children(count, this.incrementCounter);
    }
}

export default Counter;
