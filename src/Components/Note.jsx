import React from 'react'

export default function Note({ not }) {
  return (
    <div className="mt-10 bg-white p-5 inline-content w-1/4 relative capitalize border-[#d2d2d2] border">
    <p className="absolute top-2 right-2">remove</p>
    <h1 className="text-xl mt-5">{not.note}</h1>
</div>
  )
}
