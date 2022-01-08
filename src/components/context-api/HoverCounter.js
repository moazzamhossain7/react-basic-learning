export default function HoverCounter({ count, incrementCounter, theme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#fff' } : null;

    return (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        <h3 onMouseOver={incrementCounter} style={style}>
            <span>Click {count} times</span>
        </h3>
    );
}
