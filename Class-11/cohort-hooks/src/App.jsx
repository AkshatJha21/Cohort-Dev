import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const upCounter = () => {
    setCount(count+1);
  };

  const a = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <div>
      <button onClick={() => upCounter()}>Counter ({count})</button>
      <Demo a={a} />
    </div>
  )
}

const Demo = memo(({a}) => {
  console.log("Rerender");
  return (
    <div>
      Hi there
    </div>
  )
})

export default App
