export default function Counter({count, onIncrement, onDecrement}){
    return(
     <div className="counter">
    <h1>React Counter for Git</h1>
    <div className="count-display">{count}</div>
    <div className="button-group">
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  </div>)
};