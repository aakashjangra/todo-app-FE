import { useDispatch } from 'react-redux'
import './index.css'
import IconCross from '../../../../media/images/icon-cross.svg'
import React from 'react'
import { remove } from '../../../../store/features/todos/todosSlice';

const Todo = ({content}) => {
  const dispatch = useDispatch();

  const removeTodo = (id: string) => {
    dispatch(remove({id}));
    console.log('tried removing todo with id - ', id)
  }

  return (
    <div className='bg-v-dark-desat-blue border-b border-v-dark-grayish-blue flex justify-between p-4' >
      <div className='todoInput-checkbox h-5 w-5'>
        <input className='h-full w-full rounded-[50%]' type="checkbox" />
      </div>
      <p className='w-full px-4 overflow-clip'>
        {content.title}
      </p>
      <img src={IconCross} alt="remove item" 
        className='h-5 w-5'
        onClick={() => {
          removeTodo(content.id)
          console.log('clicked on todo')
        }}
      />
    </div>
  )
}

export default Todo