import { useState } from 'react'
import Counter from './Components/Day1/Counter'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onIncrement=()=>{
    if(count<=9){
      setCount((prev)=>prev+1)
    }
  }
  const onDecrement=()=>{
    if(count>=1){
      setCount((prev)=>prev-1)
    }
  }

  return (
    <>
      <Counter count={count} onIncrement={onIncrement} onDecrement={onDecrement} />
    </>
  )
}

export default App
