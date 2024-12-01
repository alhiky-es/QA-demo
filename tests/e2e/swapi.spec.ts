import { test, expect } from '@playwright/test';

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

test('Verify that there are 82 people in the response', async ({ request }) => {
    const response = await request.get('https://swapi.dev/api/people/');
    expect(response.ok()).toBeTruthy(); // Ensure the API call is successful
    const data = await response.json();
    expect(data.count).toBe(82); // Validate the count is 82
  });
  
  test('Find the name of Luke\'s homeworld', async ({ request }) => {
    const response = await request.get('https://swapi.dev/api/people/1/');
    expect(response.ok()).toBeTruthy(); // Ensure the API call is successful
    const data = await response.json();
    
    // Fetch the homeworld URL
    const homeworldResponse = await request.get(data.homeworld);
    expect(homeworldResponse.ok()).toBeTruthy();
    const homeworldData = await homeworldResponse.json();
  
    expect(homeworldData.name).toBe('Tatooine'); // Validate the homeworld is Tatooine
  });
  
  test('Test Wookiee encoding for Luke\'s data', async ({ request }) => {
    const response = await request.get('https://swapi.dev/api/people/1/?format=wookiee');
    expect(response.ok()).toBeTruthy(); // Ensure the API call is successful
    
    const data = await response.text();
    expect(data).toContain('whrascwo'); // Check for Wookiee-specific encoding
  });