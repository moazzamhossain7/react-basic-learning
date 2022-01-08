/* eslint-disable jsx-a11y/mouse-events-have-key-events */
export default function HoverCounter({ count, incrementCounter, theme, switchTheme }) {
    const style = theme === 'dark' ? { backgroundColor: '#000', color: '#fff' } : null;

    console.log('Hover component rendered');
    return (
        <div>
            <h3 onMouseOver={incrementCounter} style={style}>
                <span>Click {count} times</span>
            </h3>
            <button type="button" onClick={switchTheme}>
                Change Theme
            </button>
        </div>
    );
}
