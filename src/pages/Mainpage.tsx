import React, { useState } from "react";
import QRCode from "react-qr-code";

export interface mainpageProps {
  mainpageData: any[];
}

const Mainpage: React.FC<mainpageProps> = ({mainpageData}: mainpageProps) => {
  const [matchID, setMatchID] = useState('')
  const [thing, setThing] = useState('')
  const [data, setData] = useState<any>(mainpageData)
  const [sumbitted, setSubmitted] = useState(false);
  function submit() {
    setData({matchID, thing});
    setSubmitted(true);
  }

  return (
    <>
      <h1>Scouting App!!</h1>
      <input placeholder="matchID" value={matchID} onChange={e => setMatchID(e.target.value)}/>

      <input placeholder="do th thing" value={thing} onChange={e => setThing(e.target.value)}/>


      <button onClick={()=> {submit; }}>Submit</button>

      {sumbitted && <QRCode value={JSON.stringify(data)}/>}
    </>
  );
};

export default Mainpage;
