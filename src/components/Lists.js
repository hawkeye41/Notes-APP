import Note from "./Note";
import './Note.css';
import AddNote from  "./AddNote"
const Lists =({notes, handleAddNote,handleDeleteNote})=>{
    return(
        <div className="lists">
            {notes.map((note)=>
            <Note id={note.id} text={note.text}
             date={note.date} 
             handleDeleteNote={handleDeleteNote}/>)}
             <AddNote handleAddNote={handleAddNote}/>
        </div>
    )
}

export default Lists;