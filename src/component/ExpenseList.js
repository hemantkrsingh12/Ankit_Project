import React from 'react'

const ExpenseList = ({data}) => {
  return (
    <div className='mt-16'>ExpenseList
        <br/>
        { data &&(`Data from Props : ${data}`)}
    </div>
  )
}

export default ExpenseList