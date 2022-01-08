import withCounter from './withCounter';

function ClickCounter({ count, incrementCounter }) {
    return (
        <button type="button" onClick={incrementCounter}>
            <span>Click {count} times</span>
        </button>
    );
}

export default withCounter(ClickCounter);
