import React, { useEffect, useState } from "react";
import ImageClick from "../components/ImageClick";
import Counter from '../components/Counter';
import RadioButtons, { Option } from "../components/radioButtons/radioButtons";

export interface autonProps {
  autonData: {[key: string]: any};
  setAutonData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Auton: React.FC<autonProps> = ({autonData, setAutonData}: autonProps) => {
  const [autonPath, setAutonPath] = useState<{ x: number; y: number }[]>(autonData.autonPath || []);
  const [speakerScored, setSpeakerScored] = useState(autonData.speakerScored || 0);
  const [ampScored, setAmpScored] = useState(autonData.ampScored || 0);
  const [trapScored, setTrapScored] = useState(autonData.trapScored || 0);
  const [leftStart, setLeftStart] = useState<string>(autonData.leftStart || 'NOT_CHANGED');

  const leftStartOptions: Option = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ];
  useEffect(() => {
    setAutonData(oldData => ({...oldData, autonPath, speakerScored, ampScored, trapScored, leftStart}))
  }, [autonPath , speakerScored, ampScored, trapScored, leftStart])


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };

  return (
    <>
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <div className="firsttwoautoncounters">
          <Counter
              name='Speaker'
              count={speakerScored}
              onButtonUp={() => setSpeakerScored(speakerScored+1)}
              onButtonDown={() => {if (speakerScored > 0) setSpeakerScored(speakerScored-1)}}
            />
          
            
              <Counter
              name='Amp'
              count={ampScored}
              onButtonUp={() => setAmpScored(ampScored+1)}
              onButtonDown={() => {if (ampScored > 0) setAmpScored(ampScored-1)}}
            />

            <Counter
              name='Trap'
              count={trapScored}
              onButtonUp={() => setTrapScored(trapScored+1)}
              onButtonDown={() => {if (trapScored > 0) setTrapScored(trapScored-1)}}
            />
              
              <RadioButtons vari={leftStart} setVari={setLeftStart} options={leftStartOptions} groupName="leftStart"></RadioButtons>

            </div>
              

            
          </li>
          <li>
            <label>Robot Auton Path (Click to show path): </label>
            <ImageClick type="path" autonPath={autonPath} setAutonPath={setAutonPath}></ImageClick>
          </li>
          </ul>

      </form>
      </div>

      
    </>
  );
};

export default Auton;
