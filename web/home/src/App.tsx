import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    async function getText() {
      let response = await fetch('/api')
      const d = await response.text()
      setValue(d)
    }
    getText()
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>
          {value}
        </h3>
      </header>
    </div>
  );
}

export default App;
