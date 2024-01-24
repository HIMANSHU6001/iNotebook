import React, {useContext, useState} from 'react'
import noteContext from '../context/notes/noteContext'

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;


    const [note, setNote] = useState({title:"",description: "",tag:""})

    const handleSubmit = (e) =>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title:"",description: "",tag:""});
    }

    const onChangeHandler = (e) =>{
        setNote({...note, [e.target.name]: e.target.value});
    }

  return (
    <div className="container my-3">
        <h2>Add a note</h2>
        <form className='my-3' onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" value={note.title} onChange={(e)=> onChangeHandler(e)} name="title" className="form-control" id="title" aria-describedby="emailHelp" minLength={5} required/>
         </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input value={note.description} onChange={(e)=> onChangeHandler(e)} type="text" className="form-control" name="description" id="description" minLength={5} required/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input value={note.tag} onChange={(e)=> onChangeHandler(e)} type="text" className="form-control" name="tag" id="tag" />
          </div>
          <button type='submit' disabled={note.title.length < 5 || note.description.length < 5  } className="btn btn-primary">AddNote</button>
        </form>
      </div>
  )
}
