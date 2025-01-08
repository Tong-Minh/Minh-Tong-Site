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
      <div className=" flex flex-col items-end z-50 pr-5"> {/* navbar */}
        <Link to={isHome ? '/photography' : '/'}  onClick={() => setIsHome(!isHome)} className={` font-nunito ${isHome ? 'text-black' : 'text-white'} pt-12 text-right hover:underline `}>{isHome ? 'Photography' : 'Home'}</Link>
      </div>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/photography' element={<Photography/>} />
      </Routes>
    </>
  )
}

export default App
