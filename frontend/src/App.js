import React, { useState } from "react";
import './App.css';


const App = () => {
  const [message, setMessage] = useState('');

const handleButtonClick = () => {
  setMessage('Hello');
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        {message && <p>{message}</p>}
        <button onClick={handleButtonClick}>Click me</button>
      </header>
    </div>
  );
}

export default App;