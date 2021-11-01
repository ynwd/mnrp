import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

async function getList() {
  return await fetch('/api')
}

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    getList().then(async t => {
      setValue(await t.text())
    })
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
