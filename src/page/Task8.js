import React, { useState } from 'react'

const Task8 = () => {
  const [val, setVal] = useState("");
  const [col, setCol] = useState("50");
  function handleSubmit(e) {
    e.preventDefault();
    setCol(val);
    console.log("value: " + val);
    console.log("col: " + col);
    
  }
  return (
    <div className='mt-20 '>

      <div className="w-80 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full "  style={{ width: `${col}%` }} ></div>
      </div>

      <form className='mt-20' onSubmit={handleSubmit}>
        <input type="text" name="percantage" id="price" class="block w-40 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="1" onChange={(e) => setVal(e.target.value)} />

        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSubmit}>Submit</button>



      </form>
    </div>
  )
}

export default Task8