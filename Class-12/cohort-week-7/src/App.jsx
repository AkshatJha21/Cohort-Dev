import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import './App.css'
import {countAtom, evenSelector } from './store/atoms/count';

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons/>
      <EvenRender />
    </div>
  )
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return (
    <div>
      {count}
    </div>
  )
}

function EvenRender() {
  const isEven = useRecoilValue(evenSelector);
  return (
    <div>
      {isEven ? "Even" : null}
    </div>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log('re-render');
  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1);
      }}>+</button>
      <button onClick={() => {
        setCount(count => count - 1)
      }}>-</button>
    </div>
  )
}

export default App
