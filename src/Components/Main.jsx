"use client"
import { useState } from "react"
import Note from "./Note"

const Main = () => {
    const [inp, setInp] = useState()
    const [notes, setNote] = useState([
    {
        note: 'hey there friend'
    },
    {
        note: 'hey there friend'
    },
])

    const addNote = () => {
        const newNote = {
            note: inp,
        }

        setNote(newNote, ...notes)
        
    }
  return (
    <div>
        <div className="flex items-end  gap-10">
            <input value={inp} onChange={(e => setInp(e.target.value))} placeholder='Add note' className='px-5 py-3 rounded-md w-3/4 mt-10 border-[#d2d2d2] border outline-none' type="text" />
            <button onClick={addNote} className="px-5 py-2 bg-orange-400 text-white rounded-md">Add</button>
        </div>

        {notes.map(not => {
            return <Note not={not} />
        })}

    </div>
  )}

export default Main