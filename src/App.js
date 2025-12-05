import './App.css';
import { useState } from 'react';

function App() {
  const [isOn, setisOn] = useState(false);
  function handleToggle(){
    setisOn(!isOn);
  }
  return (
    <div className="App">
      <h1>Ben Foulerton</h1>
      <p>The light is {<p>The light is {isOn ? "ON" : "OFF"}</p>}</p>
      <button onClick={handleToggle}>Toggle Light</button>
    </div>
  );
}

export default App;