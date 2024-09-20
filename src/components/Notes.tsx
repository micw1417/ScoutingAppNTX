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
            <textarea className="notesbox"></textarea>
        </>
    )
}

export default Notes;