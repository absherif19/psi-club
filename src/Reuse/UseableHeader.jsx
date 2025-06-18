import React from 'react'
import BackButton from './BackButton'

const UseableHeader = ({ children }) => {
  return (
    <div className="flex items-center gap-4">
    <BackButton />
    <h1 className="text-xl font-semibold text-[#272963]">
    {children}
    </h1>
  </div>
  )
}

export default UseableHeader
