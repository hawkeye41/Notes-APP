import { useState , useEffect} from 'react';
import Lists from './components/Lists'
import Search from "./components/Search"
import {nanoid} from 'nanoid';
import Header from './components/Header';
import './App.css';
const App= ()=>{
  const [notes,setNotes]= useState([
    {
      id:nanoid(),
      text:'first note',
      date:"12/11/2032",
    },
    {
      id:nanoid(),
      text:'second note',
      date:"12/10/2022",
    },
    {
      id:nanoid(),
      text:'third note',
      date:"12/45/32",
    },
    {
      id:nanoid(),
      text:'new note',
      date:"12/45/32",
    },
  ]);

  const [search,setSearch]= useState('');
  const [darkMode,setDarkMode]= useState(false);

  useEffect(() => {
    const savedNotes= JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );
    if(savedNotes){
      setNotes(savedNotes);
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])
  
  const addNote =(text)=>{
    const date= new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes); 
  }
  const deleteNote=(id) =>{
    const newNotes= notes.filter((note)=> note.id!==id);
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode}/>
        <Search handleSearchNote={setSearch}/>
        <Lists notes={notes.filter((note)=>note.text.toLowerCase().includes(search))} 
        handleAddNote={addNote} handleDeleteNote={deleteNote}/>
      </div>
    </div>
  )
};

export default App;