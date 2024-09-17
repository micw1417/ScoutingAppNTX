import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import ImageClick from "../components/ImageClick";

export interface mainpageProps {
  mainPageData: {[key:string]: any};
  setMainPageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Mainpage: React.FC<mainpageProps> = ({mainPageData, setMainPageData}: mainpageProps) => {
  const [matchID, setMatchID] = useState(mainPageData.matchID || '');
  const [scouterName, setScouterName] = useState(mainPageData.scouterName || '')
  const [teamID, setTeamID] = useState(mainPageData.teamID || '')
  const [robotPos, setRobotPos] = useState<{ x: number; y: number }>(mainPageData.robotPos || [Number, Number]);
  useEffect(() => {
    setMainPageData(oldData => ({...oldData, matchID}))
  }, [matchID])

  useEffect(() => {
    setMainPageData(oldData => ({...oldData, scouterName}))
  }, [scouterName])

  useEffect(() => {
    setMainPageData(oldData => ({...oldData, teamID}))
  }, [teamID])
  
  useEffect(() => {
    setMainPageData(oldData => ({...oldData, robotPos}))
    // console.log("CHANGED", robotPos, mainPageData.robotPos)
  }, [robotPos])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Scouter Name: </label>
            <input name="Scouter Name" value={scouterName} onChange={e => setScouterName(e.target.value)}/>
          </li>

          <li>
            <label>Match ID: </label>
            <input name="Match ID" value={matchID} type="number" onChange={e => setMatchID(e.target.value)}/>
          </li>

          <li>
            <label>Team Number of who your scouting:</label>
            <input name="Team ID" value={teamID} onChange={e => setTeamID(e.target.value)}/>
          </li>

          <li>
            <label>Robot Starting Position (Click to show)</label>
            <ImageClick type={"one"} robotPos={robotPos} setRobotPos={setRobotPos}></ImageClick>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Mainpage;
