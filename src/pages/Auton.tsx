import React, { useEffect, useState } from "react";
import ImageClick from "../components/ImageClick";
import Counter from '../components/Counter';

export interface autonProps {
  autonData: {[key: string]: any};
  setAutonData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Auton: React.FC<autonProps> = ({autonData, setAutonData}: autonProps) => {
  const [autonPath, setAutonPath] = useState<{ x: number; y: number }[]>(autonData.autonPath || []);
  const [speakerScored, setSpeakerScored] = useState(autonData.speakerScored || '');
  useEffect(() => {
    setAutonData(oldData => ({...oldData, autonPath}))
  }, [autonPath])

  useEffect(() => {
    setAutonData(oldData => ({...oldData, speakerScored}))
  }, [speakerScored])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Speaker Scored: </label>
            <input name="Speaker Scored" value={speakerScored} onChange={e => setSpeakerScored(e.target.value)}/>
          </li>
          <li>
            <label>Robot Auton Path (Click to show path): </label>
            <ImageClick type="path" autonPath={autonPath} setAutonPath={setAutonPath}></ImageClick>
          </li>
          <Counter
              name='Amp'
              count={1}
              countM={1}
              onMClickDown={() => {}}
              onMClickUp={() => {}}
              onButtonDown={() => {}}
              onButtonUp={() => {}}
            />
        </ul>
      </form>
    </>
  );
};

export default Auton;
