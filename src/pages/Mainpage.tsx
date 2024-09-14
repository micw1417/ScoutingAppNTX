import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export interface mainpageProps {
  setMainPageData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Mainpage: React.FC<mainpageProps> = ({setMainPageData}: mainpageProps) => {
  const [matchID, setMatchID] = useState('')
  const [scouterName, setScouterName] = useState('')
  const [sumbitted, setSubmitted] = useState(false);

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
            <input name="Match ID" value={matchID} onChange={e => setMatchID(e.target.value)}/>
          </li>
        </ul>
      </form>
      {/* <button onClick={()=> {}}>Submit</button> */}
    </>
  );
};

export default Mainpage;
