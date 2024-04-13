import React, { useState } from 'react'

const Task4 = () => {
  const[val,setval]=useState(0);
  return (
    <div className='h-full mt-20'>
      <div className='flex justify-center my-4 items-center'>
      <button onClick={()=>setval(val-1)} type="button" className='border-2 p-2 text-3xl'>-</button>
      <span className='mx-2'>    {val}</span>
      <button onClick={()=>setval(val+1)} className='border-2 p-2 text-3xl'>+</button>
      
    </div>
    </div>
  )
}

export default Task4