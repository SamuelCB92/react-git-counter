import { useState } from 'react';
import Counter from './components/Counter.js'
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  return (
    <div className="App">
      <Counter count={count} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}
