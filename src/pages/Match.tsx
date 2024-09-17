import React, { useEffect, useState } from "react";

export interface matchProps {
  matchData: {[key: string]: any};
  setMatchData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Match: React.FC<matchProps> = ({matchData, setMatchData}: matchProps) => {
  const [stuff, setStuff] = useState(matchData.stuff || "");

  useEffect(() => {
    setMatchData(oldData => ({...oldData, stuff}))
  }, [stuff])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };

  return (
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>Match Stuff</label>
            <input name="Match Stuff" value={stuff} onChange={e => setStuff(e.target.value)}/>
          </li>
        </ul>
      </form>
  );
};

export default Match;
