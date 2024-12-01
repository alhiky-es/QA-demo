export function calculateRemainingTodos(todos) {
    return todos.filter((todo) => !todo.completed).length;
  }