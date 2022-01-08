export default function HoverCounter({ count, incrementCounter }) {
    return (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        <h1 onMouseOver={incrementCounter}>
            <span>Click {count} times</span>
        </h1>
    );
}
