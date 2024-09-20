import React, { useRef, useState, useEffect } from 'react';
import { defineConfig } from 'vite';


function Notes() {
    const[revealNotes, setRevealNotes] = useState(false);
    const toggleRevealNotes = () => {
        setRevealNotes((prev) => !prev);
    };
    

    return (
        <>
            <button onClick={toggleRevealNotes}>Notes</button>

            {revealNotes && (<div>
            <textarea className="notesbox"></textarea>
            <button onClick={toggleRevealNotes}className="exitnotesboxbutton">EXIT</button>
            </div>
             )}
        </>
    )
}

export default Notes;