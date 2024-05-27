import { useEffect, useState } from 'react'
import axios from 'axios'

// function useIsOnline() {
//   const [online, setOnline] = useState(window.navigator.onLine);

//   useEffect(() => {
//     window.addEventListener('online', () => setOnline(true));
//     window.addEventListener('offline', () => setOnline(false));
//   }, []);

//   return online;
// }

// function useMousePointer() {
//   const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     setCoordinates({ x: e.clientX, y: e.clientY });
//   };

//   useEffect(() => {
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     }
//   }, []);

//   return coordinates;
// }

// function useInterval(callback, delay) {
//   useEffect(() => {
//     const interval = setInterval(callback, delay);

//     return () => clearInterval(interval);
//   }, [callback, delay]);
// }

function useDebounce(input, interval) {
  const [debounce, setDebounce] = useState(input);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebounce(input);
    }, interval);

    return () => clearTimeout(time);
  }, [input,interval]);

  return debounce;
}

function App() {
  // const online = useIsOnline();
  // useInterval(() => {
    //   setCount(count + 1);
    // },  1000);
  // const point = useMousePointer();
  // const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500);

  return (
    <>
      {/* {online ? "Online": "Offline"}
      <br />
      You are at {point.x}, {point.y}
      <br />
      Timer is at {count} */}
      Debounced value is {debouncedValue}
      <br />
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search...'/>
    </>
  )
}

export default App