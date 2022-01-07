import React from 'react';
import Clock from './Clock';

class ClockList extends React.Component {
    render() {
        const { quantities } = this.props;

        return (
            <div>
                {quantities.map((clock) => (
                    <Clock key={clock} />
                ))}
            </div>
        );
    }
}

export default ClockList;
