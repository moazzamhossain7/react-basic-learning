/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// function Clock({ locale }) {
//     return (
//         <div>
//             <h2>{new Date().toLocaleTimeString(locale)}</h2>
//         </div>
//     );
// }

class Clock extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    {this.props.children} {new Date().toLocaleTimeString(this.props.locale)}
                </h2>
            </div>
        );
    }
}

setInterval(() => {
    ReactDOM.render(<Clock locale="bn-BD"> Hello -</Clock>, document.getElementById('root'));
}, 1000);
