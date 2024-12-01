import { test, expect } from '@playwright/test';

test('Footer updates correctly when todos are added or removed', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');

  // Add  
  await page.fill('.new-todo', 'Task 1');
  await page.press('.new-todo', 'Enter');
  await page.fill('.new-todo', 'Task 2');
  await page.press('.new-todo', 'Enter');

  // Verify count in footer
  const footerCount = await page.textContent('.todo-count');
  expect(footerCount).toBe('2 item left!');

  // Remove a task
  await page.hover('.todo-list li:nth-child(1)');
  await page.click('.destroy');

  // Verify updated count
  const updatedFooterCount = await page.textContent('.todo-count');
  expect(updatedFooterCount).toBe('1 item left!');
});