import Todo from './components/Todo';
import TodoInput from './components/TodoInput';
import './index.css';
import React, { useEffect, useState } from 'react';
import SunSvg from '../../media/images/icon-sun.svg';
import MoonSvg from '../../media/images/icon-moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, reorderTodos } from '../../store/features/todos/todosSlice';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { toggle } from '../../store/features/darkMode/darkModeSlice';

const Todos = () => {

  const todos = useSelector((state: {todos}) => state.todos.todos);
  const darkTheme = useSelector((state: {darkMode}) => state.darkMode.dark);

  const dispatch = useDispatch();
  const [todoFilter, setTodoFilter] = useState('all');
  const [todoCount, setTodoCount] = useState(todos.length);
  //filter -> all, active, completed

  const toggleTheme = () => {
    dispatch(toggle());
  }

  const clearCompletedTasks = () => {
    dispatch(clearCompleted());
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return; // dropped outside the list

    const startIndex = result.source.index;
    const endIndex = result.destination.index;

    dispatch(reorderTodos({startIndex, endIndex}));
  };

  useEffect(() => {
    setTodoCount(
      todoFilter === 'all'
      ? todos.length
      : todos.filter((todo) => todo.status === todoFilter).length
    )
  }, [todoFilter, todos])
  

  return (
      <div className="relative z-30 top-[9vh] h-full w-[90vw] sm:w-[60vw] lg:w-[35vw]">
      <header className="flex justify-between tracking-[0.9rem] mb-7">
        <h1 className="text-3xl font-[700] text-white cursor-none">TODO</h1>
        <div className="cursor-pointer" onClick={toggleTheme}>
          {darkTheme ? (
            <img className="w-5 h-5" src={SunSvg} alt="svg of sun" />
          ) : (
            <img className="w-5 h-5" src={MoonSvg} alt="svg of moon" />
          )}
        </div>
      </header>
      <TodoInput classN="mb-5" />
      <div className="shadow-lg">
        <div className="todos max-h-[52vh] w-full overflow-auto rounded-sm scroll-smooth ">
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
              {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {todos &&
                    todos.length > 0 &&
                    todos.map((todo, index) => (
                      <Draggable
                        key={todo.id}
                        draggableId={todo.id}
                        index={index}
                      >
                        {(provided) =>
                          (todoFilter === 'all' ||
                            todoFilter === todo.status) && (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <Todo key={todo.id} content={todo} />
                            </div>
                          )
                        }
                      </Draggable>
                    ))}
                </div>
              )}
            </Droppable>
          </DragDropContext>

          {todoCount == 0 && (
            <div className="bg-white dark:bg-v-dark-desat-blue  w-full text-center p-4">
              Empty
            </div>
          )}
        </div>

        <section className="bg-white dark:bg-v-dark-desat-blue border-t border-v-dark-grayish-blue flex justify-between items-center p-4 text-xs">
          <p className="text-gray">{todoCount} items left</p>
          <div className="select-filer flex gap-3 justify-self-center">
            <button
              className={`${todoFilter === 'all' ? 'selectedFilter' : ''} hover:font-[700]`}
              onClick={() => {
                setTodoFilter('all');
              }}
            >
              All
            </button>
            <button
              className={`${todoFilter === 'active' ? 'selectedFilter' : ''} hover:font-[700]`}
              onClick={() => {
                setTodoFilter('active');
              }}
            >
              Active
            </button>
            <button
              className={`${todoFilter === 'completed' ? 'selectedFilter' : ''}hover:font-[700]`}
              onClick={() => {
                setTodoFilter('completed');
              }}
            >
              Completed
            </button>
          </div>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </section>
      </div>
      <footer
        className="relative text-xs sm:text-lg text-v-dark-grayish-blue bottom-0 w-full text-center font-normal 
        my-10"
      >
        Drag and drop to reorder list
      </footer>
    </div>
  );
};

export default Todos;
