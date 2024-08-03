import React, { useState } from "react";
import './App.css';


const App = () => {
  const [message, setMessage] = useState('');

const handleButtonClick = async () => {
  const response = await fetch(`http://localhost:3001`);
  const json = await response.json();
  const newMessage = json.message;
  
  setMessage(newMessage);
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        {message && <p>{message}</p>}
        <button onClick={handleButtonClick}>Click me</button>
      </header>
      
      <p>This is another test paragraph</p>
      <p>Another test for pushing</p>

      <h3>This is a heading</h3>
    </div>
  );
}

export default App;