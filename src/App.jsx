import './App.css'
import Homepage from './components/homepage'
import { Route, Routes, Link, useLocation} from 'react-router-dom'
import Photography from "./components/photography"
import { useState } from 'react'


function App() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === '/');

  return (
    <>
      <div className=" flex flex-col items-end z-50 pr-5">
        <Link to={isHome ? '/photography' : '/'}  onClick={() => setIsHome(!isHome)} className={` font-nunito ${isHome ? 'text-black' : 'text-white'} pt-12 text-right hover:underline `}>{isHome ? 'Photography' : 'Home'}</Link>
      </div>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/photography' element={<Photography/>} />
      </Routes>
    </>
  )

  {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
}

export default App
