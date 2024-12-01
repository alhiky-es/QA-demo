import { test, expect } from '@playwright/test';

test('Refreshing the page resets the state', async ({ page }) => {
    await page.goto('http://127.0.0.1:7002');
  
    // Add a todo
    await page.fill('.new-todo', 'Persistent Todo');
    await page.press('.new-todo', 'Enter');
  
    // Verify the todo exists
    const todoCountBefore = await page.locator('.todo-list li').count();
    expect(todoCountBefore).toBe(1);
  
    // Refresh the page
    await page.reload();
  
    // Verify that the state has reset (no todos)
    const todoCountAfter = await page.locator('.todo-list li').count();
    expect(todoCountAfter).toBe(0);
  });