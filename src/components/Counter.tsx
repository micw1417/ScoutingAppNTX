import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import NoteImg from "/src/assets/note.png"
interface Props {
  name: string;
  count: number;
  countM: number;
  onButtonUp: () => void;
  onButtonDown: () => void;
  onMClickUp: () => void;
  onMClickDown: () => void;
}

function Counter({ name, count, onButtonDown, onButtonUp}: Props) {

  return (
    <>
    <div>
      <h2>{name}: {count}</h2>
        <button onClick={onButtonUp} className="purplebutton">↑</button>
        <button onClick={onButtonDown} className="purplebutton"><UndoRoundedIcon/></button>
        </div>
    </>
  )
}

export default Counter;