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
        const { date, locale } = this.state;
        // let button;

        // if (locale === 'bn-BD') {
        //     button = <Button change={this.changeIt} locale="en-US" />;
        // } else {
        //     button = <Button change={this.changeIt} locale="bn-BD" />;
        // }

        return (
            <div>
                <h2>
                    <span>Hello - </span>
                    {date.toLocaleTimeString(locale)}
                </h2>
                {locale === 'bn-BD' ? (
                    <Button change={this.changeIt} locale="en-US" show enable={false} />
                ) : (
                    <Button change={this.changeIt} locale="bn-BD" show={false} enable />
                )}

                {/* {button} */}
            </div>
        );
    }
}

export default Clock;
