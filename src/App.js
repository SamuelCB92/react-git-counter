import { useState, useEffect } from 'react';
import Counter from './components/Counter.js'
import CountHistory from './components/CountHistory.js'
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([{count: 0, action: "start"}]);
  const [toggleHistory, setToggleHistory] = useState(false);

  const istoggled = () => setToggleHistory(!toggleHistory);

  function increment(){
    const newCount = count+1;
  setCount(newCount);
  setHistory(prev => [...prev, {count: newCount, action: "increment"}])
  }

  function decrement(){
    const newCount = count-1;
  setCount(newCount);
  setHistory(prev => [...prev, {count: newCount, action: "decrement"}])
  }

  function reset(){
    const newCount = count*0;
  setCount(newCount);
  setHistory(prev => [...prev, {count: newCount, action: "reset"}])
  }

  return (
    <div className="App">
      <div style={{position: 'relative', display: 'inline-block'}}>
        <Counter count={count} onIncrement={increment} onDecrement={decrement} onReset={reset} />
        <button onClick={istoggled}>{toggleHistory?"Hide History":"Show History"}</button>
        {toggleHistory && <CountHistory onChange={history}></CountHistory>}
      </div>
    </div>
  );   
}
