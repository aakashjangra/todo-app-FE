import { useDispatch } from 'react-redux';
import './index.css';
import IconCross from '/icon-cross.svg';
import CheckIcon from '/icon-check.svg';
import {
  markCompleted,
  remove,
  updateTodo,
} from '../../../../store/features/todos/todosSlice';
import { useEffect, useState } from 'react';

const Todo = ({ content }) => {
  const dispatch = useDispatch();
  const [editingMode, setEditingMode] = useState(false);

  const removeTodo = (id: string) => {
    dispatch(remove({ id }));
  };

  const markComplete = (id: string) => {
    dispatch(markCompleted({ id }));
  };

  const handleTodoUpdate = (id: string, value: string) => {
    console.log('handle update - ', id, value);
    dispatch(updateTodo({ id, value }));
  };

  const enableEditing = () => {
    setEditingMode(true);
  };

  const disableEditing = () => {
    setEditingMode(false);
  };

  useEffect(() => {
    setInterval(disableEditing, 10000);
  }, []);

  return (
    <div className="max-w-full bg-white dark:bg-v-dark-desat-blue border-b border-v-dark-grayish-blue flex items-center p-4 cursor-pointer">
      <div
        className={`border min-h-5 min-w-5 flex items-center justify-center
          rounded-full border-v-dark-desat-blue dark:border-light-grayish-blue cursor-pointer hover:drop-shadow-md
          ${content.status === 'completed' ? 'bg-blue-300 border-none' : 'bg-transparent'}
          hover:border-light-grayish-blue
          dark:hover:border-h-light-grayish-blue
          `}
        onClick={() => {
          if (content.status === 'completed') return; //don't allow changing if already completed

          disableEditing();
          markComplete(content.id);
        }}
      >
        {content.status === 'completed' && (
          <img className="dark:invert" src={CheckIcon} alt="" />
        )}
      </div>
      <div className="todo min-w-full text-pretty flex items-center justify-between">
        <p
          className={`cursor-pointer w-full px-4 pt-1 mr-2 text-anywhere ${content.status === 'completed' ? 'line-through' : ''}`}
          onClick={() => {
            if (content.status === 'completed') return;
            enableEditing();
          }}
        >
          {editingMode ? (
            <textarea
              className={`w-full appearance-none outline-nonedark:text-white bg-transparent resize-none`}
              name=""
              id=""
              value={content.title}
              onChange={(e) => {
                handleTodoUpdate(content.id, e.target.value);
              }}
            />
          ) : (
            <p className="w-full break-all">{content.title}</p>
          )}
        </p>
        <div className="min-h-4 min-w-4 mr-5 flex items-center">
          <img
            src={IconCross}
            alt="remove item"
            className="object-contain cross-icon dark:invert"
            onClick={() => {
              removeTodo(content.id);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
