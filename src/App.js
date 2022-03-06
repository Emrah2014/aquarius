import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a github workshop for archers
        </p>
        <a
          className="App-link"
          href="https://archisacademy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yay we learned github
        </a>
      </header>
    </div>
  );
}

export default App;
