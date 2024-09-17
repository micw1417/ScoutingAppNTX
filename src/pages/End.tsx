import React, { useEffect, useState } from "react";

export interface endProps {
  setEndData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const End: React.FC<endProps> = ({setEndData}: endProps) => {
  const [stuff, setStuff] = useState("");

  useEffect(() => {
    setEndData(oldData => ({...oldData}))
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed
  };

  return (
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label>End Stuff</label>
            <input name="Scouter Name" value={stuff} onChange={e => setStuff(e.target.value)}/>
          </li>
        </ul>
      </form>
  );
};

export default End;
