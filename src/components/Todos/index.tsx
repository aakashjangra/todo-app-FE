import Todo from './components/Todo'
import TodoInput from './components/TodoInput'
import './index.css'
import React from 'react'
import SunSvg from '../../media/images/icon-sun.svg'
import { useSelector } from 'react-redux'

const Todos = () => {
  // const Todos = [
  //   {
  //     "title": "get groceries"
  //   }, {
  //     "title": "complete frontend"
  //   }
  // ]
  const Todos = useSelector(state => state.todos.todos)
  return (
    <div className='absolute top-[9vh] w-[32.5vw]'>
      <header className='flex justify-between tracking-[0.9rem] mb-7'>
        <h1 className='text-3xl font-[700]'>TODO</h1>
        <img className='w-5 h-5' src={SunSvg} alt="svg of sun" />
      </header>
        <TodoInput classN='mb-5'/> 
      <div className='todos max-h-[60vh] overflow-auto'>
        { Todos.map(todo => {
          return <Todo key={todo.id} content={todo}/>
        })

        }
      </div>
      <footer className='relative bottom-0 w-full text-center font-normal 
        mt-16'>
        Drag and drop to reorder list
      </footer> 
    </div>
  )
}

export default Todos