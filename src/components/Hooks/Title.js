import React from 'react';

function Title() {
    console.log('Title component rendered!');

    return <h1>useCallback and useMemo Hooks</h1>;
}

export default React.memo(Title);
