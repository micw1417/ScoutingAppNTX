// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Mainpage from './pages/Mainpage';
function App() {
  
  const [currentPage, setPage] = useState("mainpage");

  return (
    <>
    
      {currentPage == "mainpage" && (

        <>
          <Mainpage></Mainpage>
        </>
      )}
    



      <>
      </>
    </>
  )
}

export default App