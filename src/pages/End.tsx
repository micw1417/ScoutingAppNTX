import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import Notes from "../components/Notes";
import RadioButtons, {Option}  from "../components/radioButtons/RadioButtons";

export interface endProps {
  endData: { [key: string]: any };
  setEndData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;

  mainpageData: { [key: string]: any };
  autonData: { [key: string]: any };
  matchData: { [key: string]: any };
}

const End: React.FC<endProps> = ({
  endData,
  setEndData,
  mainpageData,
  autonData,
  matchData,
}: endProps) => {
  const [notes, setNotes] = useState(endData.notes || "");
  const [redPoints, setRedPoints] = useState(endData.redPoints || '');
  const [bluePoints, setBluePoints] = useState(endData.bluePoints || '');
  const [penalties, setPenalties] = useState(endData.penalties || '');
  const [RP, setRP] = useState(endData.RP || '');
  const [deactivated, setDeactivated] = useState(endData.deactivated || "");
  const deactivatedOptions: Option = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
  ];

  const [playedDefense, setPlayedDefense] = useState(endData.playedDefense || "");
  const playedDefenseOptions: Option = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' }
  ];

  const [submitted, setSubmitted] = useState(false);
  const [allData, setAllData] = useState<{ [key: string]: any }>();

  useEffect(() => {
    setEndData((oldData) => ({ ...oldData, notes, redPoints, bluePoints, penalties, RP, playedDefense, deactivated }));
  }, [notes, redPoints, bluePoints, penalties, RP, playedDefense, deactivated]);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    setAllData({ ...mainpageData, ...autonData, ...autonData, ...endData, ...matchData,});
    console.log({ ...mainpageData,...autonData, ...autonData, ...endData, ...matchData,});
    setSubmitted(true);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Notes notes={notes} setNotes={setNotes}></Notes>
        <ul>
          <li>
            <div className="input-container">
              <label>Red Points</label>
              <input name="Red Points" value={redPoints} onChange={(e) => setRedPoints(e.target.value)} type={"number"}/>
            </div>
          </li>
          <li>
            <div className="input-container">
              <label>Blue Points</label>
              <input name="Blue Points" value={bluePoints} onChange={(e) => setBluePoints(e.target.value)} type={"number"}/>
            </div>
          </li>
          <li>
            <div className="input-container">
              <label>Penalties</label>
              <input name="Penalties" value={penalties} onChange={(e) => setPenalties(e.target.value)} type={"number"}/>
            </div>
          </li>
          <li>
            <div className="input-container">
              <label>RP</label>
              <input name="RP" value={RP} onChange={(e) => setRP(e.target.value)} type={"number"}/>
            </div>
          </li>
          <li>
          <RadioButtons vari={deactivated} setVari={setDeactivated} options={deactivatedOptions} groupName="deactivated"></RadioButtons>
          </li>
          <li>
          <RadioButtons vari={playedDefense} setVari={setPlayedDefense} options={playedDefenseOptions} groupName="playedDefense"></RadioButtons>
          </li>
        </ul>
        <button onClick={handleSubmit}>SUBMIT!</button>
      </form>

      {submitted && <QRCode value={JSON.stringify(allData)} />}
    </>
  );
};

export default End;
