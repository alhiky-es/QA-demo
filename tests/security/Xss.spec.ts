import { test, expect } from '@playwright/test';

// test('Application escapes harmful inputs to prevent XSS', async ({ page }) => {
//   await page.goto('http://127.0.0.1:7002');

//   // Add a malicious script as a todo
//   const maliciousScript = '<script>alert("XSS")</script>';
//   await page.fill('.new-todo', maliciousScript);
//   await page.press('.new-todo', 'Enter');

//   // Verify the input is properly escaped in the DOM
//   const todoText = await page.textContent('.todo-list li label');
  
//   // Ensure the text contains the escaped version of <script>alert("XSS")</script>
//   expect(todoText).toContain('&lt;script&gt;alert(&quot;XSS&quot;)&lt;');
//   expect(todoText).toContain('&lt;&#x2F;script&gt;'); // Confirm proper escaping of closing tag

//   // Verify no script tags were executed or added to the DOM
//   const scripts = await page.evaluate(() => document.querySelectorAll('script').length);
//   expect(scripts).toBe(0);
// });

test('Application escapes harmful inputs to prevent XSS', async ({ page }) => {
  await page.goto('http://127.0.0.1:7002');

  // Add a malicious script as a todo
  const maliciousScript = '<script>alert("XSS")</script>';
  await page.fill('.new-todo', maliciousScript);
  await page.press('.new-todo', 'Enter');

  // Verify the input is properly escaped in the DOM
  const todoText = await page.textContent('.todo-list li label');
  expect(todoText).toContain('&lt;script&gt;alert(&quot;XSS&quot;)&lt;&#x2F;script&gt;');

  // Verify no script tags were executed or added to the DOM
  const scripts = await page.evaluate(() => document.querySelectorAll('script').length);
  expect(scripts).toBe(0); // If this fails, it highlights the security bug
});