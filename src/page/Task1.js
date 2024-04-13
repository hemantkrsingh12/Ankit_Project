import React from 'react'
import About from '../component/About'
import ExpenseForm from '../component/ExpenseForm'
import ExpenseList from '../component/ExpenseList'
import Home from '../component/Home'

const Task1 = () => {
  return (
    <div>
      <About/>
      <Home/>
      <ExpenseForm/>
      <ExpenseList/>
    </div>
  )
}

export default Task1
