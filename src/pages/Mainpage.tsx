import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import ImageClick from "../components/ImageClick";

export interface mainpageProps {
  setMainPageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Mainpage: React.FC<mainpageProps> = ({setMainPageData}: mainpageProps) => {
  const [matchID, setMatchID] = useState('')
  const [scouterName, setScouterName] = useState('')
  const [teamID, setTeamID] = useState('')
  const [robotStartPos, setRobotStartingPos] = useState(['', '']);
  useEffect(() => {
    setMainPageData(oldData => ({...oldData, matchID}))
  }, [matchID])

  useEffect(() => {
    setMainPageData(oldData => ({...oldData, matchID}))
  }, [scouterName])
  

  return (
    <>
      <form>
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
            <ImageClick type={"one"}></ImageClick>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Mainpage;
