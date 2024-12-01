import { calculateRemainingTodos } from './utils'; // Update with the actual path to your utility functions
import { test, expect } from '@playwright/test';

test('calculateRemainingTodos correctly counts active todos', () => {
  // Simulated todo list
  const todos = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];

  // Call the utility function
  const activeCount = calculateRemainingTodos(todos);

  // Assert the result
  expect(activeCount).toBe(2); // There are 2 active todos
});