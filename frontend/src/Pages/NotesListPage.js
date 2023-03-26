import React, {useState, useEffect} from 'react'
import ListItem from '../Components/ListItem'

const NotesListPage = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()
    }, [])

    let getNotes = async () => {
        let response = await fetch('/api/notes/')
        let data = await response.json()
        setNotes(data)
    }

  return (
    <div>
        <div className='notes-list'>
            {notes.map((note, index) => {
                return <ListItem note={note} key={index}/>
            })}
        </div>
    </div>
  )
}

export default NotesListPage