import NoteContext from "./noteContext";
import {useState} from 'react'

const NoteState = (props) => {
    let notesInitial = [
        {
            "_id": "65a25c1818a1235041e71fc8",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.015Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
        {
            "_id": "65a25c1818a1235041e71fca",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:04.343Z",
            "__v": 0
        },
        {
            "_id": "65a25c1f18a1235041e71fce",
            "user": "6595334ee60eaa4bb64e5087",
            "title": "My Title",
            "description": "Pleaase wake up early",
            "tag": "personal",
            "date": "2024-01-13T09:47:11.526Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;