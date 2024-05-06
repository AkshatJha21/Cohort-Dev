import { useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobAtom, messageAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);
  const [messageCount, setMessageCount] =  useRecoilState(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobCount >= 100 ? "99+" : jobCount})</button>
      <button>Messages ({messageCount >= 100 ? "99+" : messageCount})</button>
      <button>Notifications ({notificationCount >= 100 ? "99+" : notificationCount})</button>
      <button>Profile</button>
      <br />
      <br />
      <button onClick={() => {
        setMessageCount(messageCount + 1);
      }}>Send Message</button>
      <ButtonUpdater />
    </>
  )
}

function ButtonUpdater() {
  const setJobCount = useSetRecoilState(jobAtom);
  return (
    <>
      <button onClick={() => {
        setJobCount(job => job + 1);
      }}>Get Job</button>
    </>
  )
}

export default App
