import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import './index.css';
import React, { useEffect, useState } from 'react';
import SunSvg from '../../media/images/icon-sun.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../../store/features/todos/todosSlice';
// import { removeCompleted } from '../../store/features/todos/todosSlice';

const Todos = () => {
  // const Todos = [
  //   {
  // id
  //     "title": "get groceries"
  // completed
  //   }, {
  //     "title": "complete frontend"
  //   }
  // ]
  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();
  const [todoFilter, setTodoFilter] = useState('all');
  const [todoCount, setTodoCount] = useState(todos.length);
  //filter -> all, active, completed

  const clearCompletedTasks = () => {
    dispatch(clearCompleted());
  };

  useEffect(() => {
    setTodoCount(
      todoFilter === 'all'
      ? todos.length
      : todos.filter((todo) => todo.status === todoFilter).length
    )
  }, [todoFilter, todos])
  

  return (
    <div className="absolute top-[9vh] w-[32.5vw]">
      <header className="flex justify-between tracking-[0.9rem] mb-7">
        <h1 className="text-3xl font-[700]">TODO</h1>
        <img className="w-5 h-5" src={SunSvg} alt="svg of sun" />
      </header>
      <TodoInput classN="mb-5" />
      <div className="todos max-h-[52vh] overflow-auto">
        {todos && todos.length > 0 && (
          todos.map((todo) => {
            if(todoFilter === 'all' || todoFilter === todo.status){
              console.log('todo is: ', todo);
              return <Todo key={todo.id} content={todo} />;
            }
          })
        )} 
        {todoCount == 0 && (
          <div className="bg-v-dark-desat-blue border-b border-v-dark-grayish-blue w-full text-center p-4 ">
            Empty
          </div>
        )}
      </div>

      <section className="bg-v-dark-desat-blue flex justify-between items-center p-4 text-xs">
        <p className="text-gray">
          { todoCount } items left
        </p>
        <div className="flex gap-3 justify-self-center">
          <button
            className={`${todoFilter === 'all' ? 'selectedFilter' : ''}`}
            onClick={() => {
              setTodoFilter('all');
            }}
          >
            All
          </button>
          <button
            className={`${todoFilter === 'active' ? 'selectedFilter' : ''}`}
            onClick={() => {
              setTodoFilter('active');
            }}
          >
            Active
          </button>
          <button
            className={`${todoFilter === 'completed' ? 'selectedFilter' : ''}`}
            onClick={() => {
              setTodoFilter('completed');
            }}
          >
            Completed
          </button>
        </div>
        <button onClick={clearCompletedTasks}>Clear Completed</button>
      </section>

      <footer
        className="relative text-xs text-v-dark-grayish-blue bottom-0 w-full text-center font-normal 
        mt-10"
      >
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default Todos;
