import React, { useRef, useState } from 'react'

const Task9 = () => {
  const [people, setpeople] = useState([{
    id: 1, name: 'John'},
    { id: 2, name: "Hemant" },
    { id: 3, name: "Vikas" },
    { id: 4, name: "Raghav" },
    { id: 5, name: "Siddharth" },
    { id: 6, name: "Raghav" },
    { id: 7, name: "Siddharth" },
    { id: 8, name: "Raghav" },
  ])
  const dragPerson= useRef(0);
  const draggedOverPerson=useRef(0);
  function handleSort()
  {
    const peopleClone=[...people];
    const temp=peopleClone[dragPerson.current]
    peopleClone[dragPerson.current]=peopleClone[draggedOverPerson.current];
    peopleClone[draggedOverPerson.current]=temp;
    setpeople(peopleClone);
  }
  return (
    <div className='mt-16'>
      <ul className='flex min-h-screen flex-col items-center space-y-4'>
  {
    people.map((item,index)=>{
     return(
    <li key={item.id}  className='border rounded p-2 bg-gray-100'
    draggable
     onDragStart={()=> (dragPerson.current =index)}
     onDragEnter={()=> (draggedOverPerson.current = index)}
     onDragEnd={handleSort}
     onDragOver={(e)=>e.preventDefault()}
    
    >{item.name}</li>
     )

    })
  }
      </ul>
    </div>
  )
}

export default Task9