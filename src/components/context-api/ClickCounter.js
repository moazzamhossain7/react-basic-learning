export default function ClickCounter({ count, incrementCounter }) {
    return (
        <button type="button" onClick={incrementCounter}>
            <span>Click {count} times</span>
        </button>
    );
}
