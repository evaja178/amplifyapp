import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Congratulations!
        </p>
        <a
          className="App-link"
          href="https://www.google.com/maps/@52.2185853,0.1458061,19z"
          target="_blank"
          rel="noopener noreferrer"
        >
          Location
        </a>
      </header>
    </div>
  );
}

export default App;
