import { useState } from 'react'
import reactLogo from './assets/react.svg'
import arrowDown from './assets/arrow-down.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/navbar"
import Introduction from "./components/introduction"
import Projects from "./components/ProjectGrid/projects"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex flex-col items-center'>
        <div className=" flex flex-col items-end">
          <Navbar />
        </div>
        
        <div className=' h-[775px]'>
          <Introduction 
            pageName="Minh Tong"
            pageSecondName="ống"
            description="Junior Web Designer & Software Developer, focusing on learning to create interesting, appealing, and accessible work."
          />

          <a className=" flex flex-col items-center absolute top-[650px] inset-0">
              <div className=' font-nunito text-sm pb-3'>Portfolio</div>
              <img src={arrowDown} className="" alt="Down Arrow" />
          </a>
        </div>

        {/* <div> Tống Hoàng Minh */}
          <Projects />
        {/* </div> */}

      </div>
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
