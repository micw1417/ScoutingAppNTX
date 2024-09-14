import React, { useEffect, useState } from "react";

export interface matchProps {
  setMatchData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Match: React.FC<matchProps> = ({setMatchData}: matchProps) => {
  const [stuff, setStuff] = useState("");

  useEffect(() => {
    setMatchData(oldData => ({...oldData}))
  }, [])

  return (
    <>
      <form>
        <ul>
          <li>
            <label>Match Stuff</label>
            <input name="Scouter Name" value={stuff} onChange={e => setStuff(e.target.value)}/>
          </li>
        </ul>
      </form>
    </>
  );
};

export default Match;
