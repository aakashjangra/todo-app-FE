import { useDispatch } from 'react-redux';
import './index.css';
import IconCross from '/icon-cross.svg';
import CheckIcon from '/icon-check.svg';
import {
  markCompleted,
  remove,
} from '../../../../store/features/todos/todosSlice';

const Todo = ({ content }) => {
  const dispatch = useDispatch();

  const removeTodo = (id: string) => {
    dispatch(remove({ id }));
  };

  const markComplete = (id: string) => {
    dispatch(markCompleted({ id }));
  };

  return (
    <div className="bg-white dark:bg-v-dark-desat-blue border-b border-v-dark-grayish-blue flex items-center p-4 cursor-pointer">
      <div
        className={`border h-5 w-5 flex items-center justify-center rounded-[50%] border-v-dark-desat-blue cursor-pointer 
          ${content.status === 'completed' ? 'bg-blue-300 border-none' : 'bg-transparent'}
          hover:border-blue-300`}
        onClick={() => {
          if (content.status === 'completed') return; //don't allow changing if already completed

          markComplete(content.id);
          console.log('status is:', content.status);
        }}
      >
        {content.status === 'completed' && (
          <img className="dark:invert" src={CheckIcon} alt="" />
        )}
      </div>
      <div className="todo w-full flex items-center justify-between">
        <p
          className={` w-full px-4 ${content.status === 'completed' ? 'line-through' : ''} `}
        >
          {content.title}
        </p>
        <img
          src={IconCross}
          alt="remove item"
          className="h-4 w-4 cross-icon dark:invert"
          onClick={() => {
            removeTodo(content.id);
            console.log('clicked on todo');
          }}
        />
      </div>
    </div>
  );
};

export default Todo;
