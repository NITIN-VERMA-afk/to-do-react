

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../reducers/todos';

function Home() {
  const [newTodo, setNewTodo] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo({ id: Date.now(), text: newTodo, completed: false }));
      setNewTodo('');
    }
  };

  return (
    <div className='mt-24 flex flex-col items-center justify-center bg-sky-800'>
      <h1 className='mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential'>MY Tasks</h1>
      <div className='flex gap-2'>
      <input className='class=" mb-2 text-sm font-medium border-solid border-2 border-sky-500 '
        type="text"
        placeholder="Add a new Task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handleAddTodo}>Add</button>

      </div>
     
      <ul className='flex-col items-center align-middle'>
        {todos.map((todo) => (
          <li className='flex-col gap-2 ' key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo({ id: todo.id }))}
            />
            {todo.text}
            <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => dispatch(removeTodo({ id: todo.id }))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

