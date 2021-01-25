import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

function App() {
    const Button = styled.button`
      background: transparent;
      border-radius: 3px;
      border: 2px solid palevioletred;
      color: palevioletred;
      margin: 0 1em;
      padding: 0.25em 1em;
    `
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
      Styled Components
        </p>
        <a
          className="App-link"
          href="https://styled-components.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Styled Compponents in React
        </a>
        <Button>This is a button </Button>

      </header>
    </div>
  );
}

export default App;
