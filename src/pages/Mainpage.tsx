import React, { useEffect, useState } from "react";
import ImageClick from "../components/ImageClick";

export interface mainpageProps {
  mainPageData: {[key:string]: any};
  setMainPageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Mainpage: React.FC<mainpageProps> = ({mainPageData, setMainPageData}: mainpageProps) => {
  const [alliance, setAlliance] = useState(mainPageData.alliance || Alliance.NOT_SET)
  const [matchID, setMatchID] = useState(mainPageData.matchID || '');
  const [scouterName, setScouterName] = useState(mainPageData.scouterName || '')
  const [teamID, setTeamID] = useState(mainPageData.teamID || '')
  const [preload, setPreload] = useState(mainPageData.preload || false)
  const [noshow, setNoshow] = useState(mainPageData.noshow || false)
  const [robotPos, setRobotPos] = useState<{ x: number; y: number }>(mainPageData.robotPos || [Number, Number]);
  useEffect(() => {
    setMainPageData(oldData => ({...oldData, alliance, matchID, scouterName, teamID, robotPos, preload, noshow}))
  }, [alliance, matchID, scouterName, teamID, robotPos, preload, noshow])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="select-dropdown">
        <label>Alliance: </label>
        <select name="alliance" id="alliance" value={alliance} onChange={(event) => setAlliance(event.target.value as Alliance)}>
          <option value={Alliance.NOT_SET} disabled>Select an alliance</option>
          <option value={Alliance.RED}>Red Alliance</option>
          <option value={Alliance.BLUE}>Blue Alliance</option>
        </select>
        </div>
        <ul>
          <li>
            <div className="input-container">
            <label>Scouter Name: </label>
            <input name="Scouter Name" value={scouterName} onChange={e => setScouterName(e.target.value)}/>
            </div>
          </li>

          <li>
            <div className="input-container">
            <label>Match Number: </label>
            <input name="Match ID" value={matchID} type="number" onChange={e => setMatchID(e.target.value)}/>
            </div>
          </li>
          <li>
          <div className="input-container">
            <label>Team ID ur scouting </label>
            <input id="teamID" name="TeamID" value={teamID} type="number" onChange={e => setTeamID(e.target.value)}/>
            </div>
          </li>
        

          <li>
            
           
            
          </li>

          <li>
          <div className="checkboxContainer">
            <label className="custom-checkbox">
            <input type="checkbox" checked={preload} onChange={e => setPreload(e.target.checked)}/>
            <span className="checkmark"></span>
            <span className="checkboxtext">Pre load </span>
            </label>
            <label className="custom-checkbox">
            <input type="checkbox" checked={noshow} onChange={e => setNoshow(e.target.checked)}/>
            <span className="checkmark"></span>
            <span className="checkboxtext">No Show </span>
            </label>
            </div>
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
  BLUE="BLUE",
  RED="RED",
  NOT_SET="NOT_SET"
}

export default Mainpage;
