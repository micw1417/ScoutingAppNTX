import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import NoteImg from "/src/assets/note.png"
interface Props {
  name: string;
  count: number;
  onButtonUp: () => void;
  onButtonDown: () => void;
  
}

function Counter({ name, count, onButtonDown, onButtonUp}: Props) {

  return (
    <>
    <div className="countercontainer">
      <h2>{name}: {count}</h2>
      <div className="counterinrow">
        <button onClick={onButtonUp} className="purplebutton">↑</button>
        <button onClick={onButtonDown} className="purplebutton"><UndoRoundedIcon/></button>
        </div>
        </div>
    </>
  )
}

export default Counter;