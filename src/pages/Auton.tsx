import React, { useEffect, useState } from "react";
import ImageClick from "../components/ImageClick";
import Counter from '../components/Counter';
import RadioButtons, {Option} from "../components/radioButtons/radioButtons";

export interface autonProps {
  autonData: {[key: string]: any};
  setAutonData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Auton: React.FC<autonProps> = ({autonData, setAutonData}: autonProps) => {
  const [autonPath, setAutonPath] = useState<{ x: number; y: number }[]>(autonData.autonPath || []);
  const [autonSpeaker, setAutonSpeaker] = useState(autonData.autonSpeaker || 0);
  const [autonAmp, setAutonAmp] = useState(autonData.autonAmp || 0);
  const [autonTrap, setAutonTrap] = useState(autonData.autonTrap || 0);
  const [leftStart, setLeftStart] = useState<string>(autonData.leftStart || 'NOT_CHANGED');
  const [resetTrigger, setResetTrigger] = useState(0);

  const leftStartOptions: Option = [
    { label: 'Yes', value: 'Yes' },
    { label: 'No', value: 'No' },
  ];

  useEffect(() => {
    setAutonData(oldData => ({...oldData, autonPath, autonSpeaker, autonAmp, autonTrap, leftStart}))
  }, [autonPath , autonSpeaker, autonAmp, autonTrap, leftStart])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleResetPath = () => {
    setAutonPath([]);
    setResetTrigger(prev => prev + 1);
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
                  count={autonSpeaker}
                  onButtonUp={() => setAutonSpeaker(autonSpeaker+1)}
                  onButtonDown={() => {if (autonSpeaker > 0) setAutonSpeaker(autonSpeaker-1)}}
                />
                <Counter
                  name='Amp'
                  count={autonAmp}
                  onButtonUp={() => setAutonAmp(autonAmp+1)}
                  onButtonDown={() => {if (autonAmp > 0) setAutonAmp(autonAmp-1)}}
                />
                <Counter
                  name='Trap'
                  count={autonTrap}
                  onButtonUp={() => setAutonTrap(autonTrap+1)}
                  onButtonDown={() => {if (autonTrap > 0) setAutonTrap(autonTrap-1)}}
                />
                <RadioButtons vari={leftStart} setVari={setLeftStart} options={leftStartOptions} groupName="Left Start" />
              </div>
            </li>
            <li>
              <label>Robot Auton Path (Click to show path): </label>
              <button className="resetbutton" type="button" onClick={handleResetPath}>Reset Path</button>
              <ImageClick type="path" autonPath={autonPath} setAutonPath={setAutonPath} resetTrigger={resetTrigger} />
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};

export default Auton;