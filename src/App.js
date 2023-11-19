import { useState } from 'react';
import './App.css';

function App() { 
  const [count, setCount] = useState(0)

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="App">
      <div className='count'>
        <h2>Count: {count}</h2>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
      </div>

    </div>
  );
}


export default App;
