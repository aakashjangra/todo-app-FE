import { useSelector } from 'react-redux';
import './index.css'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../../../../store/features/todos/todosSlice';
import CheckIcon from '../../../../media/images/icon-check.svg';
import {v4 as uuidv4} from 'uuid';

const TodoInput = ({ classN }) => {
  const [content, setContent] = useState('');
  const [selected, setSelected] = useState(false);
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const addTodo = (content: { id: string, title: string, status: string }) => {
    dispatch(add(content))
    setContent('');
    setCompleted(false);
  }

  return (
    <div
      className={`${classN} flex items-center bg-white dark:bg-v-dark-desat-blue w-full p-4 gap-4 rounded-sm`}
    >
      <div
        className={`border h-5 w-5 flex items-center justify-center rounded-[50%] border-v-desat-dark-blue cursor-pointer ${completed ? 'bg-blue-300' : 'bg-transparent'}
         hover:border-blue-300`}
        onClick={() => {
          setCompleted(!completed);
        }}
      >
        {completed && <img className="" src={CheckIcon} alt="" />}
      </div>
      <input
        onKeyDown={async (e) => {
          if (e.code === 'Enter' && content) {
            console.log('enter pressed');
            console.log('create todo -> ', content);
            const id = await uuidv4();
            addTodo({
              id,
              title: content,
              status: completed ? 'completed' : 'active',
            });
          }
        }}
        className="appearance-none h-full w-full text-blue bg-white dark:bg-v-dark-desat-blue focus-visible:outline-none "
        type="text"
        name="todo-input"
        placeholder="Create a new todo..."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
    </div>
  );
}

export default TodoInput