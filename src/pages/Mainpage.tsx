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

        


        <div className="select-dropdown">
        <label>Alliance: </label>
          <select>
            <option value="Option 1">Red Alliance</option>
            <option value="Option 2">Blue Alliance</option>
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
            <label>Team Number:</label>
            <input name="Team ID" value={teamID} onChange={e => setTeamID(e.target.value)}/>
            </div>
          </li>

          <li>
          <div className="checkboxContainer">
            <label className="custom-checkbox">
            <input type="checkbox"/>
            <span className="checkmark"></span>
            <span className="checkboxtext">Pre load </span>
            </label>
            <label className="custom-checkbox">
            <input type="checkbox"/>
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
  BLUE,
  RED,
  NOT_SET
}

export default Mainpage;
