// export interface TimeDataProps {
//   timeElapsed: number;
//   timeSinceLastScore: number;
// }

import React, { useState } from "react";
import QRCode from "react-qr-code";

const Mainpage: React.FC = () => {
  const [thing, setThing] = useState('')
  const [data, setData] = useState<any>()

  function submit() {
    setData({thing});
  }

  return (
    <>
      <h1>Scouting App!!</h1>
      <input placeholder="do th thing" value={thing} onChange={e => setThing(e.target.value)}/>

      <button onClick={submit}>Submit</button>

      {data && <QRCode value={JSON.stringify(data)}/>}
    </>
  );
};

export default Mainpage;
