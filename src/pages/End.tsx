import React, { useEffect, useState } from "react";

export interface endProps {
  setEndData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const End: React.FC<endProps> = ({setEndData}: endProps) => {
  const [stuff, setStuff] = useState("");

  useEffect(() => {
    setEndData(oldData => ({...oldData}))
  }, [])

  return (
    <>
      <form>
        <ul>
          <li>
            <label>End Stuff</label>
            <input name="Scouter Name" value={stuff} onChange={e => setStuff(e.target.value)}/>
          </li>
        </ul>
      </form>
    </>
  );
};

export default End;
