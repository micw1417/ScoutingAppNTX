import React, { useEffect, useState } from "react";
import ImageClick from "../components/ImageClick";
import Counter from '../components/Counter';

export interface autonProps {
  autonData: {[key: string]: any};
  setAutonData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Auton: React.FC<autonProps> = ({autonData, setAutonData}: autonProps) => {
  const [autonPath, setAutonPath] = useState<{ x: number; y: number }[]>(autonData.autonPath || []);
  const [speakerScored, setSpeakerScored] = useState(autonData.speakerScored || 0);
  const [ampScored, setAmpScored] = useState(autonData.ampScored || 0);
  const [trapScored, setTrapScored] = useState(autonData.trapScored || 0);

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
          <Counter
              name='Speaker'
              count={speakerScored}
              onButtonUp={() => setSpeakerScored(speakerScored+1)}
              onButtonDown={() => {if (speakerScored > 0) setSpeakerScored(speakerScored-1)}}
            />
              <Counter
              name='Amp'
              count={speakerScored}
              onButtonUp={() => setSpeakerScored(speakerScored+1)}
              onButtonDown={() => {if (speakerScored > 0) setSpeakerScored(speakerScored-1)}}
            />
              <Counter
              name='Trap'
              count={speakerScored}
              onButtonUp={() => setSpeakerScored(speakerScored+1)}
              onButtonDown={() => {if (speakerScored > 0) setSpeakerScored(speakerScored-1)}}
            />

            <form>
              <p><strong> Left Starting Zone </strong></p>
              <label> yes </label>
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <label> no </label>
              <input type = "radio" id="no" name="leftstartingzone"></input>
            </form>
          </li>
          <li>
            <label>Robot Auton Path (Click to show path): </label>
            <ImageClick type="path" autonPath={autonPath} setAutonPath={setAutonPath}></ImageClick>
          </li>
          </ul>

      </form>
      

      
    </>
  );
};

export default Auton;
