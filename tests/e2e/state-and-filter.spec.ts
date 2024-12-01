import { test, expect } from '@playwright/test';

  test('mark a todo as complete', async ({ page }) => {
    await page.goto('http://127.0.0.1:7002');
    await page.fill('.new-todo', 'Complete Me');
    await page.press('.new-todo', 'Enter');
    await page.click('.toggle'); // Mark as complete
  
    const isCompleted = await page.getAttribute('.todo-list li', 'class');
    expect(isCompleted).toContain('completed');
  });
  
  test('filter active todos', async ({ page }) => {
    await page.goto('http://127.0.0.1:7002');
    await page.fill('.new-todo', 'Active Todo');
    await page.press('.new-todo', 'Enter');
    await page.click('.toggle'); // Mark as complete
    await page.click('.filters >> text=Active'); // Click the "Active" filter
  
    const visibleTodos = await page.locator('.todo-list li').count();
    expect(visibleTodos).toBe(0); // No active todos should be shown
  });
  
  test('clear completed todos', async ({ page }) => {
    await page.goto('http://127.0.0.1:7002');
    await page.fill('.new-todo', 'Clear Me');
    await page.press('.new-todo', 'Enter');
    await page.click('.toggle'); // Mark as complete
    await page.click('.clear-completed'); // Click the "Clear completed" button
  
    const todoCount = await page.locator('.todo-list li').count();
    expect(todoCount).toBe(0); // List should be empty
  });
  
  
  test('filter all todos', async ({ page }) => {
    await page.goto('http://127.0.0.1:7002');
    await page.fill('.new-todo', 'Todo 1');
    await page.press('.new-todo', 'Enter');
    await page.fill('.new-todo', 'Todo 2');
    await page.press('.new-todo', 'Enter');
    await page.click('.toggle'); // Mark one as complete
    await page.click('.filters >> text=All'); // Click "All" filter
  
    const todos = await page.locator('.todo-list li').count();
    expect(todos).toBe(2); // Both todos should be visible
  });
  
  test('Complete all todos using the down arrow', async ({ page }) => {
    // Navigate to the app
    await page.goto('http://127.0.0.1:7002');
  
    // Add multiple todos
    const newTodoInput = page.locator('.new-todo');
    await newTodoInput.fill('First Todo');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Second Todo');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Third Todo');
    await newTodoInput.press('Enter');
  
    // Complete all todos by clicking the down arrow
    const toggleAllButton = page.locator('.toggle-all');
    await toggleAllButton.click();
  
    // Assert all todos are marked as completed
    const completedTodos = page.locator('.todo-list li.completed');
    await expect(completedTodos).toHaveCount(3);
  
  });
  
  test('Uncheck all todos using the down arrow', async ({ page }) => {
    // Navigate to the app
    await page.goto('http://127.0.0.1:7002');
  
    // Add multiple todos
    const newTodoInput = page.locator('.new-todo');
    await newTodoInput.fill('First Todo');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Second Todo');
    await newTodoInput.press('Enter');
    await newTodoInput.fill('Third Todo');
    await newTodoInput.press('Enter');
  
    // Complete all todos
    const toggleAllButton = page.locator('.toggle-all');
    await toggleAllButton.click();
  
    // Uncheck all todos
    await toggleAllButton.click();
  
    // Assert all todos are marked as uncompleted
    const uncompletedTodos = page.locator('.todo-list li:not(.completed)');
    await expect(uncompletedTodos).toHaveCount(3);
  
  
  });