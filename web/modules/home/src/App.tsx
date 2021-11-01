import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    async function getList() {
      let response = await fetch('/api')
      setValue(await response.text())
    }
    getList()
  }, [value]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="txt">
          {value}
        </p>
      </header>
    </div>
  );
}

export default App;
