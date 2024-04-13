import React from 'react'
import { useParams } from 'react-router-dom'

const Task7 = () => {
   const{data}=useParams();
  return (
    <div className='mt-20'>
      <h1 className='text-3xl'>Task7</h1>
      <p>Data from Params : {data}</p>
    </div>
  )
}

export default Task7