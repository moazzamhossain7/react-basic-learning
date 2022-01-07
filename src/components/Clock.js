import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    state = {
        date: new Date(),
        locale: 'en-US',
    };

    componentDidMount() {
        this.timer = setInterval(() => this.trick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    changeIt = (locale) => {
        this.setState({
            locale,
        });
    };

    trick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('Clock component rendered!');
        const { date, locale } = this.state;

        return (
            <div>
                <h2>
                    <span>Hello - </span>
                    {date.toLocaleTimeString(locale)}
                </h2>
                <Button change={this.changeIt} locale="bn-BD" />
            </div>
        );
    }
}

export default Clock;
