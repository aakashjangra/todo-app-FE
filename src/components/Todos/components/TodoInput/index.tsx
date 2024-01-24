import { useSelector } from 'react-redux';
import './index.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../../../store/features/todos/todosSlice';

const TodoInput = ({classN}) => {
  const [content, setContent] = useState('');
  const todos = useSelector(state => state.todos.todos)
  const dispatch = useDispatch();

  const addTodo = (content: {id: string, title: string}) => {
    dispatch(add(content))
    setContent('');
  }

  return (
    <div className={`${classN} flex place-center bg-v-dark-desat-blue w-full p-4 gap-4`}>
      <div className='todoInput-checkbox h-5 w-5'>
        <input className='h-full w-full rounded-[50%]' type="checkbox" />
      </div>
      <input onKeyDown={(e) => {
        if(e.code === 'Enter' && content){
          console.log('enter pressed')
          console.log('create todo -> ', content)
          addTodo({'id': Date.now().toString() + Math.random().toString(), 'title': content});
          console.log('todos are ', todos)
        } 
      }} className='h-full w-full bg-v-dark-desat-blue focus-visible:outline-none' type="text" name="todo-input" placeholder='Create a new todo...' value={content} onChange={(e) => {
        setContent(e.target.value);
      }}/>
    </div>
  )
}

export default TodoInput