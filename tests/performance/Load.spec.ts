import { test, expect } from '@playwright/test';

test('Application performs well under load', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');

  // Add multiple todos
  for (let i = 0; i < 100; i++) {
    await page.fill('.new-todo', `Task ${i}`);
    await page.press('.new-todo', 'Enter');
  }

  // Measure performance
  const startTime = performance.now();
  const todoCount = await page.locator('.todo-list li').count();
  const endTime = performance.now();

  expect(todoCount).toBe(100);
  expect(endTime - startTime).toBeLessThan(3000); // Ensure it takes less than 3 seconds
});