import { test, expect } from '@playwright/test';

test('Todo item displays correct text', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');
  await page.fill('.new-todo', 'Test Item');
  await page.press('.new-todo', 'Enter');
  const todoText = await page.textContent('.todo-list li label');
  expect(todoText).toBe('Test Item');
});

test('Todo item can be marked as completed', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');
  await page.fill('.new-todo', 'Test Item');
  await page.press('.new-todo', 'Enter');
  await page.click('.todo-list li .toggle'); // Mark as completed
  const completedClass = await page.getAttribute('.todo-list li', 'class');
  expect(completedClass).toContain('completed');
});