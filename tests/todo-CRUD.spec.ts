import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';

test('add a todo item', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002'); // Navigate to the app
  await page.fill('.new-todo', 'Test Todo'); // Enter text in the input
  await page.press('.new-todo', 'Enter'); // Simulate pressing Enter

  // Assert that the todo item appears in the list
  const todoText = await page.textContent('.todo-list li label');
  expect(todoText).toBe('Test Todo');
});

test('delete a todo item', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002'); // Navigate to the app
  await page.fill('.new-todo', 'Delete Me'); // Add a todo
  await page.press('.new-todo', 'Enter'); // Simulate pressing Enter

  // Delete the todo item
  await page.hover('.todo-list li'); // Hover over the todo to reveal the delete button
  await page.click('.destroy');

  // Assert that the todo list is empty
  const todoCount = await page.locator('.todo-list li').count();
  expect(todoCount).toBe(0);
});

// TODO: Add your other tests from your test plan below. Reminder this whole assessment meant to take less than 3 hours!
// If you have the time, you can make more than 6 tests. Otherwise, once you finish your 6 tests you can 
// follow the format below by commenting out tests with a descriptive title of your test case you would have made

test('add multiple todo items', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');
  await page.fill('.new-todo', 'Todo 1');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', 'Todo 2');
  await page.press('.new-todo', 'Enter');

  const todos = await page.locator('.todo-list li label').allTextContents();
  expect(todos).toEqual(['Todo 1', 'Todo 2']);
});

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


// TODO We want to see an example of your API testing skills. Please write a test that uses the SWAPI API to test the following:

// API Testing
// Use swapi documentation https://swapi.dev/documentation

// test('Use https://swapi.dev/api/people to confirm that there are 82 people in the response', async ({ page }) => {
//   
// });

// test('Use https://swapi.dev/api/people/1 to find the name of Luke's homeworld', async ({ page }) => {
//   
// });

// test('Use https://swapi.dev/api/people/1 with a wookiee encoding to assert the name of the value "whrascwo"', async ({ page }) => {
//   
// });
