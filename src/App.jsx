import { useState } from 'react'
import './App.css'
function App() {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  }
  const Decrement = () => {
    setCounter(counter - 1);
  }
  const Reset = () => {
    setCounter(0)
  }
  return (
    <div className='App'>
      <div style={{display: 'flex', columnGap: '35px'}} className='counter'>
        <span style={{fontSize: '50px'}}>{counter}</span>
        <span style={{ cursor: 'pointer', fontSize: '50px' }} onClick={Increment}>+</span>
        <span style={{ cursor: 'pointer', fontSize: '50px' }} onClick={Decrement}>-</span>
        <span style={{fontSize: '50px', cursor: 'pointer'}} onClick={Reset}>Reset</span>
      </div>
    </div>
  )
}

export default App
