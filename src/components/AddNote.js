import {useState} from 'react'
import './Note.css';
const AddNote=({handleAddNote})=>{
    const [noteText, setNoteText] = useState('');
    const charLimit=200;
    const handleChange=(event)=>{
        if(charLimit-event.target.value.length >=0){
            setNoteText(event.target.value);
        }
    }
   const handleClickSave=()=>{
       if(noteText.trim().length>0){
        handleAddNote(noteText); 
        setNoteText('');
    }
}
    return(
        <div className="note new">
            <textarea rows='8'
             column='10'
             placeholder="Add new note..."
             value={noteText}
             onChange={handleChange}
             ></textarea>
             <div className="note-footer">
                 <small>{charLimit-noteText.length} remaining</small>
                <button className="save" onClick={handleClickSave}>ADD</button>
             </div>
        </div>
    )

}
export default AddNote;