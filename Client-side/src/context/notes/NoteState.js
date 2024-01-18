import NoteContext from "./noteContext";
import { useState } from 'react'

const NoteState = (props) => {
    const host = "http://localhost:5000"
    let notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // Get all Notes
    const fetchAllNotes = async () => {
        const url = `${host}/api/notes/fetchallnotes`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTMzNGVlNjBlYWE0YmI2NGU1MDg3In0sImlhdCI6MTcwNDUzNTI5Nn0.B8I__31BIluq5ZcGNAPa5R8SXH4Tx34rIgaOza5Dsc8'
            }
        });
        const json = await response.json()
        console.log(json);
        setNotes(json);
    }



    // Add a note
    const addNote = async (title, description, tag) => {
        const url = `${host}/api/notes/addnote`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTMzNGVlNjBlYWE0YmI2NGU1MDg3In0sImlhdCI6MTcwNDUzNTI5Nn0.B8I__31BIluq5ZcGNAPa5R8SXH4Tx34rIgaOza5Dsc8'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json =response.json();
        let note = {
            "_id": "65aba25c1818a1235041e71fc8",
            "user": "6595334ee60eaa4bb64e5087",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-01-13T09:47:04.015Z",
            "__v": 0
        }
        console.log("adding a note", note);
        setNotes(notes.concat(note))
    }
    // Delete a note
    const deleteNote = (noteId) => {
        const newNote = notes.filter((note) => { return note._id !== noteId; })
        console.log("Deleting note id", noteId);
        setNotes(newNote)
    }
    // Edit a note
    const editNote = async (id, title, description, tag) => {
        //API call
        const url = `${host}/api/notes/updatenote/${id}`
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU5NTMzNGVlNjBlYWE0YmI2NGU1MDg3In0sImlhdCI6MTcwNDUzNTI5Nn0.B8I__31BIluq5ZcGNAPa5R8SXH4Tx34rIgaOza5Dsc8'
            },
            body: JSON.stringify({title, description, tag})
        });
        const json =response.json();


        // Edit in client
        for (let index = 0; index < notes.length; index++) {
            const note = notes[index];
            if (note._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }


        }
    }
    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, fetchAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;