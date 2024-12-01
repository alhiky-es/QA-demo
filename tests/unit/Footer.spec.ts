import { test, expect } from '@playwright/test';

test('Footer displays correct count of active todos', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');

  // Add multiple todos
  await page.fill('.new-todo', 'Todo 1');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', 'Todo 2');
  await page.press('.new-todo', 'Enter');

  // Assert the footer count
  const count = await page.textContent('.footer .todo-count');
  expect(count).toBe('2 item left!');
});