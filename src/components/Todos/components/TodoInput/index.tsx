import { useSelector } from 'react-redux';
import './index.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../../../store/features/todos/todosSlice';
import {v4 as uuidv4} from 'uuid';

const TodoInput = ({ classN }) => {
  const [content, setContent] = useState('');
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const addTodo = (content: { id: string, title: string }) => {
    dispatch(add(content))
    setContent('');
  }

  return (
    <div className={`${classN} flex items-center bg-v-dark-desat-blue w-full p-4 gap-4 `}>
      <input className='appearance-none bg-white h-5 w-5 rounded-[50%] checked:bg-v-dark-blue checked:text-white cursor-pointer' type="checkbox" checked={selected} onChange={() => {setSelected(!selected)}} />
      <input onKeyDown={async (e) => {
        if (e.code === 'Enter' && content) {
          console.log('enter pressed')
          console.log('create todo -> ', content)
          const id = await uuidv4();
          addTodo({id, 'title': content });
        }
      }}
        className='appearance-none h-full w-full text-blue bg-v-dark-desat-blue focus-visible:outline-none ' type="text"
        name="todo-input"
        placeholder='Create a new todo...' value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }} />
    </div>
  )
}

export default TodoInput