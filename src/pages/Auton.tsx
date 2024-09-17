import React, { useEffect, useState } from "react";
import Counter from '../components/Counter';

export interface autonProps {
  setAutonData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Auton: React.FC<autonProps> = ({setAutonData}: autonProps) => {
  const [stuff, setStuff] = useState("");

  useEffect(() => {
    setAutonData(oldData => ({...oldData}))
  }, [])

  return (
    <>
      <form>
        <ul>
          <li>
            <label>Auton Stuff: </label>
            <input name="Scouter Name" value={stuff} onChange={e => setStuff(e.target.value)}/>
            
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
