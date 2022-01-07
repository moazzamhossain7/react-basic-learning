import Clock from './components/Clock';

function App() {
    console.log('App component rendered!');
    return (
        <div>
            <Clock locale="bn-BD" />
        </div>
    );
}

export default App;
