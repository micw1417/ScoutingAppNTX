import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

export interface endProps {
  endData: {[key: string]: any};
  setEndData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;

  mainpageData: {[key: string]: any};
  autonData: {[key: string]: any};
  matchData: {[key: string]: any};
}

const End: React.FC<endProps> = ({endData, setEndData, mainpageData, autonData, matchData}: endProps) => {
  const [stuff, setStuff] = useState(endData.stuff || "");
  const [submitted, setSubmitted] = useState(false);
  const [allData, setAllData] = useState<{[key: string]: any}>();

  useEffect(() => {
    setEndData(oldData => ({...oldData, stuff}))
  }, [stuff])

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAllData({...mainpageData, ...autonData, ...autonData, ...endData})
    console.log({...mainpageData, ...autonData, ...autonData, ...endData})
    setSubmitted(true);
  };
  return (
    <>
      <form onSubmit={(e) => {e.preventDefault()}}>
        <ul>
          <li>
            <label>End Stuff</label>
            <input name="End Stuff" value={stuff} onChange={e => setStuff(e.target.value)}/>
          </li>
        </ul>

        <button onClick={handleSubmit}>SUBMIT!</button>
      </form>

      {submitted && <QRCode value={JSON.stringify(allData)}/>}
    </>
  );
};

export default End;
