import React, { useEffect, useState } from "react";
import Counter from '../components/Counter';

export interface matchProps {
  matchData: {[key: string]: any};
  setMatchData: React.Dispatch<React.SetStateAction<{[key: string]: any}>>;
}

const Match: React.FC<matchProps> = ({matchData, setMatchData}: matchProps) => {
  const [stuff, setStuff] = useState(matchData.stuff || "");
  const [speakerScored, setSpeakerScored] = useState(matchData.speakerScored || 0);
  const [speakerAmpScored, setSpeakerAmpScored] = useState(matchData.speakerScored || 0);
  const [ampScored, setAmpScored] = useState(matchData.ampScored || 0);
  const [trapScored, setTrapScored] = useState(matchData.trapScored || 0);
  const [timesAmp, setTimesAmp] = useState(matchData.trapScored || 0);
  const [shuttled, setShuttled] = useState(matchData.trapScored || 0);

  useEffect(() => {
    setMatchData(oldData => ({...oldData, stuff}))
  }, [stuff])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the default form submission
    // You can add any additional logic here if needed\
  };

  return (
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <div className="matchrow1">
            <Counter
              name='Speaker'
              count={speakerScored}
              onButtonUp={() => setSpeakerScored(speakerScored+1)}
              onButtonDown={() => {if (speakerScored > 0) setSpeakerScored(speakerScored-1)}}
            />
            <Counter
              name='Speaker (Amped)'
              count={speakerAmpScored}
              onButtonUp={() => setSpeakerAmpScored(speakerAmpScored+1)}
              onButtonDown={() => {if (speakerAmpScored > 0) setSpeakerAmpScored(speakerAmpScored-1)}}
            />
            <Counter
              name='Amp'
              count={ampScored}
              onButtonUp={() => setAmpScored(ampScored+1)}
              onButtonDown={() => {if (ampScored > 0) setAmpScored(ampScored-1)}}
            />
            </div>
            <div className="matchrow2">
            <Counter
              name='Trap'
              count={trapScored}
              onButtonUp={() => setTrapScored(trapScored+1)}
              onButtonDown={() => {if (trapScored > 0) setTrapScored(trapScored-1)}}
            />
            <Counter
              name='Amped Activated'
              count={timesAmp}
              onButtonUp={() => setTimesAmp(timesAmp+1)}
              onButtonDown={() => {if (timesAmp > 0) setTimesAmp(timesAmp-1)}}
            />
            <Counter
              name='Shuttled'
              count={shuttled}
              onButtonUp={() => setShuttled(shuttled+1)}
              onButtonDown={() => {if (shuttled > 0) setShuttled(shuttled-1)}}
            />
            </div>
            <div className="matchrow3">
            <form>
              <p className="mngrtghfwevbcfs"><strong>Spotlight</strong></p>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>Yes</span>
              </label>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>No</span>
              </label>
            </form>
            <form>
              <p className="mngrtghfwevbcfs"><strong>Stage</strong></p>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>Park</span>
              </label>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>Onstage</span>
              </label>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>None</span>
              </label>
            </form>
            <form>
              <p className="mngrtghfwevbcfs"><strong>Coopertition</strong></p>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>Yes</span>
              </label>
              <label className="radio"> 
              <input type = "radio" id="yes" name="leftstartingzone"></input>
              <span>No</span>
              </label>
            </form>
            </div>

          </li>
        </ul>
      </form>
  );
};

export default Match;
