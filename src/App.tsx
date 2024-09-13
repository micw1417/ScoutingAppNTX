// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Mainpage from './pages/Mainpage';
function App() {
  
  const [currentPage, setPage] = useState("mainpage");
  const [mainpageData, setMainpageData] = useState([]);
  return (
    <>
    
      {currentPage == "mainpage" && (

        <>
          <Mainpage mainpageData={mainpageData}></Mainpage>
        </>
      )}
    



      <>
      </>
    </>
  )
}

export default App