import { test, expect } from '@playwright/test';
import { TIMEOUT } from 'dns';




// TODO: Add your other tests from your test plan below. Reminder this whole assessment meant to take less than 3 hours!
// If you have the time, you can make more than 6 tests. Otherwise, once you finish your 6 tests you can 
// follow the format below by commenting out tests with a descriptive title of your test case you would have made

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



test('add multiple todo items', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');
  await page.fill('.new-todo', 'Todo 1');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', 'Todo 2');
  await page.press('.new-todo', 'Enter');

  const todos = await page.locator('.todo-list li label').allTextContents();
  expect(todos).toEqual(['Todo 1', 'Todo 2']);
});



test('Edit a todo item', async ({ page }) => {
  // Navigate to the app
  await page.goto('http://127.0.0.1:7002');

  // Add a todo
  const newTodoInput = page.locator('.new-todo');
  await newTodoInput.fill('First Todo');
  await newTodoInput.press('Enter');

  // Double-click to edit the todo
  const todoItem = page.locator('.todo-list li label');
  await todoItem.dblclick();

  await todoItem.fill('Updated Todo');
  await todoItem.press('Enter');

});


// test('Footer remains visible when no todos are displayed', async ({ page }) => {
//   await page.goto('http://127.0.0.1:7002');
  
//   // Check if the footer is initially hidden
//   const footer = page.locator('.footer');
//   await expect(footer).toBeHidden();

//   // Add a todo
//   await page.fill('.new-todo', 'Test Todo');
//   await page.press('.new-todo', 'Enter');

//   // Wait for the footer to appear and check visibility
//   await expect(footer).toBeVisible();

//   // Delete the todo
//   await page.hover('.todo-list li'); // Hover over the todo item
//   const destroyButton = page.locator('.destroy');
//   await expect(destroyButton).toBeVisible(); // Wait until the destroy button is visible
//   await destroyButton.click(); // Click the destroy button

//   // Ensure the footer is still visible after deleting all todos
//   await expect(footer).toBeVisible();
// });




