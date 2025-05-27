import React from 'react'
import myprofile from '../../../assets/myprofile.png'
const Image = () => {
  return (
    <div className='p-11 h-fit border border-[#E9EAF0] rounded-2xl'>
      <img src={myprofile}
           alt="Avatar"
           className="min-w-72 rounded-2xl object-cover" />
    </div>
  )
}

export default Image
