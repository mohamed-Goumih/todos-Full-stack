import todos from '../storage/todos.js';

//liste des todos
export const getTodos = () => todos;

//ajouter un todo
export const createTodo = (newTodo) => {
  todos.push(newTodo);
  return newTodo;
};
//modifier un todo
export const updateTodo = (id, updatedTodo) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    return todos[index];
  }
  return null;
};

//supprimer un todo
export const deleteTodo = (id) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index !== -1) {
    return todos.splice(index, 1)[0];
  }
  return null;
};

