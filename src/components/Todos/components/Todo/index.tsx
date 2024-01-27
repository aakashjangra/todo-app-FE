import { useDispatch } from 'react-redux'
import './index.css'
import IconCross from '../../../../media/images/icon-cross.svg'
import React, { useState } from 'react'
import { markCompleted, remove } from '../../../../store/features/todos/todosSlice'

const Todo = ({content}) => {
  const dispatch = useDispatch();

  const removeTodo = (id: string) => {
    dispatch(remove({id}));
  }

  const markComplete = (id: string) => {
    dispatch(markCompleted({id}));
  }

  return (
    <div className='bg-v-dark-desat-blue border-b border-v-dark-grayish-blue flex items-center justify-between p-4 cursor-pointer'>
      <input 
        className='appearance-none bg-white h-5 w-5 rounded-[50%] checked:bg-v-dark-blue checked:text-white cursor-pointer'  
        type="checkbox"  
        checked={content.status === 'completed'}
        onChange={(e) => {
            if (content.status === 'completed') return; //don't allow changing if already completed

            markComplete(content.id);
            console.log('status is:', content.status)
        }}
      />
      <p className={`w-full px-4 ${content.status === 'completed'? 'line-through': ''} `}>
        {content.title}
      </p>
      <img src={IconCross} alt="remove item" 
        className='h-4 w-4'
        onClick={() => {
          removeTodo(content.id)
          console.log('clicked on todo')
        }}
      />
    </div>
  )
}

export default Todo