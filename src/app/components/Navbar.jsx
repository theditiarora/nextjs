'use client';
import { useRef } from 'react'
import Image from "next/image";
import UserImg from '../../../public/user.png'

export default function Navbar() {
    const fileInput = useRef()
  return (
    <nav className='flex justify-between'>
        <h1 className='text-lg font-semibold'>YNotes.</h1>

        <Image onClick={() => fileInput.current.click()} className='w-12 h-12' src={UserImg} alt="profieImage" />
        <input className="invisible" ref={fileInput} type="file" accept="image/*" />
    </nav>
  )
}
