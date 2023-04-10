"use client"
import { useState } from "react"

const Main = () => {
    const [note, setNote] = useState([{
        note: 'hey there friend'
    }])
  return (
    <div>
        <div className="flex items-end  gap-10">
            <input onChange={(e => setNote(e.target.value))} placeholder='Add note' className='px-5 py-3 rounded-md w-3/4 mt-10 border-[#d2d2d2] border outline-none' type="text" />
            <button className="px-5 py-2 bg-orange-400 text-white rounded-md">Add</button>
        </div>

        

    </div>
  )}

export default Main