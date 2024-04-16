import { useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);

  const upCounter = () => {
    setCount(count+1);
  };

  let sum = useMemo(() => {
    let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    }
    return total;
  }, [num]);

  return (
    <div>
      <input type="number" placeholder='number' onChange={(e) => {
        setNum(e.target.value);
      }}/>
      <p>Sum is: {sum}</p>
      <button onClick={() => upCounter()}>Counter ({count})</button>
    </div>
  )
}

export default App
