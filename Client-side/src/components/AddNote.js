import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;


    const [note, setNote] = useState({
        title:"",
        description: "",
        tag:"default"
    })

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }

    const onChangeHandler = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className="container my-3">
        <h2>Add a note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" onChange={(e)=> onChangeHandler(e)} name="title" className="form-control" id="title" aria-describedby="emailHelp" />
         </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input onChange={(e)=> onChangeHandler(e)} type="text" className="form-control" name="description" id="description" />
          </div>
          <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}>AddNote</button>
        </form>
      </div>
  )
}
