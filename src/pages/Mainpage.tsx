import React, { useEffect, useState } from "react";
import ImageClick from "../components/ImageClick";

export interface mainpageProps {
  mainPageData: {[key:string]: any};
  setMainPageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Mainpage: React.FC<mainpageProps> = ({mainPageData, setMainPageData}: mainpageProps) => {
  const [alliance, setAlliance] = useState(Alliance.NOT_SET)
  const [matchID, setMatchID] = useState(mainPageData.matchID || '');
  const [scouterName, setScouterName] = useState(mainPageData.scouterName || '')
  const [teamID, setTeamID] = useState(mainPageData.teamID || '')
  const [robotPos, setRobotPos] = useState<{ x: number; y: number }>(mainPageData.robotPos || [Number, Number]);
  useEffect(() => {
    setMainPageData(oldData => ({...oldData, alliance, matchID, scouterName, teamID, robotPos}))
    console.log(alliance)
  }, [alliance, matchID, scouterName, teamID, robotPos])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>Alliance: </label>
        <select name="alliance" id="alliance" value={alliance}>
          <option >Red Alliance</option>
          <option>Blue Alliance</option>
        </select>

        <ul>
          <li>
            <label>Scouter Name: </label>
            <input name="Scouter Name" value={scouterName} onChange={e => setScouterName(e.target.value)}/>
          </li>

          <li>
            <label>Match Number: </label>
            <input name="Match ID" value={matchID} type="number" onChange={e => setMatchID(e.target.value)}/>
          </li>

          <li>
            <label>Pre load</label>
            <input type="checkbox" id="preload" name="preload" value="preload"></input>
            <label>No Show?</label>
            <input type="checkbox" id="noshow" name="noshow" value="noshow"></input>
          </li>

          <li>
            <label>Team Number:</label>
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

enum Alliance {
  BLUE,
  RED,
  NOT_SET
}

export default Mainpage;
