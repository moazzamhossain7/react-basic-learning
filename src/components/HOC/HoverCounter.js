/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import withCounter from './withCounter';

function HoverCounter({ count, incrementCounter }) {
    return (
        <h1 onMouseOver={incrementCounter}>
            <span>Hover {count} times</span>
        </h1>
    );
}

export default withCounter(HoverCounter);
