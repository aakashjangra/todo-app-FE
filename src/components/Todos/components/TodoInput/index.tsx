import './index.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../../../store/features/todos/todosSlice';
import CheckIcon from '/icon-check.svg';
import { v4 as uuidv4 } from 'uuid';

const TodoInput = ({ classN }) => {
  const [content, setContent] = useState('');
  const [completed, setCompleted] = useState(false);

  const dispatch = useDispatch();

  const addTodo = async (title: string, status: string) => {
    const id = await uuidv4();
    const content = { id: id, title: title, status: status };
    dispatch(add(content));
    setContent('');
    setCompleted(false);
  };

  return (
    <div
      className={`${classN} flex items-center bg-white dark:bg-v-dark-desat-blue w-full p-4 gap-4 rounded-sm`}
    >
      <div
        className={`
        border min-h-5 min-w-5 flex items-center justify-center rounded-[50%] border-v-dark-desat-blue dark:border-light-grayish-blue cursor-pointer ${completed ? 'bg-blue-300 border-none' : 'bg-transparent'}
         hover:border-blue-300
         dark:hover:border-h-light-grayish-blue
        `}
        onClick={() => {
          setCompleted(!completed);
        }}
      >
        {completed && <img className="dark:invert" src={CheckIcon} alt="" />}
      </div>
      <input
        onKeyDown={(e) => {
          if (e.key === 'Enter' && content) {
            addTodo(content, completed ? 'completed' : 'active');
          }
        }}
        className="appearance-none h-full w-full mt-1 text-blue bg-white dark:bg-v-dark-desat-blue focus-visible:outline-none "
        type="text"
        name="todo-input"
        placeholder="Create a new todo..."
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        className="p-1 bg-v-dark-desat-blue text-white dark:text-black dark:bg-light-grayish-blue rounded-full hover:scale-110"
        onClick={() => {
          if (content) {
            addTodo(content, completed ? 'completed' : 'active');
          }
        }}
      >
        <img
          className="w-[25px] object-cover invert dark:invert-0"
          src="/ic_plus.svg"
          alt=""
        />
      </button>
    </div>
  );
};

export default TodoInput;
