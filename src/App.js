import { useState } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter">
      <h1>React Counter for Git</h1>
      <div className="count-display">{count}</div>
      <div className="button-group">
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
