import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //variable and function delclare here but not do logic here just define here
     todos: [
        {
            id: 1,
            todo: "Learn React",
            completed: false,
        }
     ],
     addTodo: (todo) => {},
     updateTodo: (id, todo)=>{},
     deleteTodo: (id) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider