import './Counter.css'

const Counter = ({count,onIncrement,onDecrement}) => {
  return (
    <div className='main'>
        <h1>Counter:{count}</h1>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter