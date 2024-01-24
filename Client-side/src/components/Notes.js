import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote'

export default function Notes() {
    const context = useContext(noteContext);
    const { notes, fetchAllNotes, editNote } = context;
    const [note, setNote] = useState({id:"", etitle:"", edescription:"", etag:""})
    const refClose = useRef(null);
    const ref = useRef(null);

    useEffect(() => {
        fetchAllNotes();
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag
        });
    }

    const handleSubmit = () =>{
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onChangeHandler = (e) =>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
            <AddNote/>
            <span ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
            </span>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update Notes</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3' onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">Title</label>
                                    <input type="text" value={note.etitle} onChange={(e) => onChangeHandler(e)} name="etitle" className="form-control" id="etitle" minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">Description</label>
                                    <input onChange={(e) => onChangeHandler(e)} value={note.edescription} type="text" className="form-control" name="edescription" id="edescription" minLength={5} required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">Tag</label>
                                    <input onChange={(e) => onChangeHandler(e)} value={note.etag} type="text" className="form-control" name="etag" id="etag" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button onClick={handleSubmit} disabled={note.etitle.length < 5 || note.edescription.length < 5  } type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <section className="row my-3">
                <h2>Your Notes</h2>
                {notes.length === 0 && "No Notes to display"}
                {notes.map((note) => {
                    return <Noteitem note={note} key={note._id} updateNote={updateNote} />
                })}
            </section>
        </>
    )
}
