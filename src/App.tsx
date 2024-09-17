// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import './App.css'
import Mainpage from './pages/Mainpage';
import Auton from './pages/Auton';
import Match from './pages/Match';
import End from './pages/End';
function App() {
  
  const [currentPage, setPage] = useState("Mainpage");
  const [mainpageData, setMainpageData] = useState<{[key:string]: any}>({});
  const [autonData, setAutonData] = useState<{[key:string]: any}>({});
  const [matchData, setMatchData] = useState<{[key:string]: any}>({});
  const [endData, setEndData] = useState<{[key:string]: any}>({});


  useEffect(() => {
    // Change the CSS variable based on the current page
    switch (currentPage) {
      case "Mainpage":
        document.documentElement.style.setProperty('--background-color', '#464362');
        break;
      case "Auton":
        document.documentElement.style.setProperty('--background-color', '#518071');
        break;
      case "Match":
        document.documentElement.style.setProperty('--background-color', '#158487');
        break;
      case "End":
        document.documentElement.style.setProperty('--background-color', '#8685ef');
        break;
      default:
        document.documentElement.style.setProperty('--background-color', '#242424');
    }
  }, [currentPage]);


  return (
    <div className='grid'>
      
      <h1 id='title'>NTX Scouting App 2024</h1>

      <button className='tabs' onClick={() => {return setPage("Mainpage")}}>Main Page</button>
      <button className='tabs' onClick={() => {return setPage("Auton")}}>Auton</button>
      <button className='tabs' onClick={() => {return setPage("Match")}}>Match</button>
      <button className='tabs' onClick={() => {return setPage("End")}}>End</button>

      {currentPage == "Mainpage" && (

        <div className='mainContent'>
          <Mainpage mainPageData={mainpageData} setMainPageData={setMainpageData}></Mainpage>
        </div>
      )}
      

      {currentPage == "Auton" && (

        <div className='mainContent'>
          <Auton autonData={autonData} setAutonData={setAutonData}></Auton>
        </div>
      )}

      {currentPage == "Match" && (

        <div className='mainContent'>
          <Match setMatchData={setMatchData}></Match>
        </div>
      )}
      {currentPage == "End" && (
        
        <div className='mainContent'>
          <End setEndData={setEndData}></End>
        </div>
        
      )}
      </div>
      
    
  )
}

export default App