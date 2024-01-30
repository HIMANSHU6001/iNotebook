import NoteContext from "./noteContext";
import { useState } from 'react'

const NoteState = (props) => {
    const host = "http://localhost:5000"
    let notesInitial = []
    const [notes, setNotes] = useState(notesInitial);
    const { showAlert } = props;

    // Get all Notes
    const fetchAllNotes = async () => {
        const url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json);
    }

    // Add a note
    const addNote = async (title, description, tag) => {
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note));
        showAlert("Note added successfully", "success");
    }
    // Delete a note
    const deleteNote = async (noteId) => {

        const url = `${host}/api/notes/deletenote/${noteId}`
        fetch(url, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const newNote = notes.filter((note) => { return note._id !== noteId });
        setNotes(newNote);
        showAlert("Note deleted ", "warning");
    }
    // Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const url = `${host}/api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        // Edit in client
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            if (newNotes[index]._id === id) {
                setNotes()
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
        showAlert("Note edited", "info");
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;