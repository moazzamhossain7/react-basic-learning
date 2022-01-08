import React from 'react';

function ShowCount({ title, count }) {
    console.log(`${title} component rendered`);

    return (
        <div>
            <h3>
                {title} value is = {count}
            </h3>
        </div>
    );
}

export default React.memo(ShowCount);
