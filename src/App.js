/* eslint-disable react/jsx-no-constructed-context-values */
import React from 'react';
import LayoutComponent from './components/Hooks/LayoutComponent';
import LayoutComponentTwo from './components/Hooks/LayoutComponentTwo';

function App() {
    return (
        <div className="appName">
            <LayoutComponent />
            <LayoutComponentTwo />
        </div>
    );
}

export default App;
