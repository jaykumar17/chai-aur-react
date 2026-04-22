
import { useState, useEffect } from 'react';
import './App.css'
import { TodoProvider } from './contexts';
import { TodoForm, TodoItem } from './components';

function App() {
const [todos, setTodos] = useState([]);

const addTodo = (todo) => {
  //prev for old value and {id: Date.now(), ...todo} for new value insert in todos array and prev value check
  setTodos((prev)=>[{id: Date.now(), ...todo},...prev]);
};

const updateTodo = (id, todo) => {
   // for prev old value and map for each value check which id update and prevTodo for check each value and id for which id change and todo for new value update
  setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo));

  // prev.map((eachValue)=>(
  //   if(eachValue.id === id){
  //     return todo;
  //   }else{
  //     return eachValue;
  //   }
  // )

  // )
}

const deleteTodo = (id) => {
  //for prev old value and filter for each value check which id delete 
  setTodos((prev)=> prev.filter((prevTodo)=>prevTodo.id !== id))
}

const toggleComplete = (id) => {
  //prev for old value and map for each value check which id change and  ...prevTodo means all value as it is and completed: key and !prevTodo.completed for current value
  setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed:!prevTodo.completed}: prevTodo));
}

useEffect(()=>{
  const todos = JSON.parse(localStorage.getItem("todos"));

  if(todos && todos.length > 0){
    setTodos(todos);
  }
},[])

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
},[todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem  todo={todo} />
                          </div>
                          
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}
export default App
