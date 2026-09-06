import logo from './logo.svg';
import './App.css';
import React from 'react';
// JSX (JavaScript XML)

function App() {
  const name = (nm) => {
    return nm;
  };
  const element = <h1>Hello {name('David')}!</h1>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello {name('Joan')}!
          {element}
        </a>
      </header>
    </div>
  );
}

export default App;
