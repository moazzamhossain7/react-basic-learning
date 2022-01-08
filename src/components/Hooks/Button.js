import React from 'react';

function Button({ incrementCount, children }) {
    console.log(`${children} button rendered`);

    return (
        <div>
            <button type="button" onClick={incrementCount}>
                {children}
            </button>
        </div>
    );
}

export default React.memo(Button);
