
### 1. Create a Test Strategy

#### Product Requirements
- When no todos are added users can only view the add item textbox
- Users can create a todo list item by typing into the box "What needs to be done?" then selecting Enter on the keyboard
- Users can have multiple items in their TODO list
- Once a user submits an item to their list, they can see: their todo item in the list, how many items are uncompleted, All button, Active button, Completed button, and Clear completed items buttons. The view will default to All items when the first todo is added
- Users can complete an item by selecting the radio button next to the item. Once selected a green checkmark appears and the item is crossed off the list. The number of items left updates to show how many are uncompleted
- Users can complete all items by selecting the down arrow above the radio buttons when there are uncompleted todos
- Once a task is completed it can be viewed in the All or Completed views
- Users can uncheck all todos by selecting the down arrow above radio buttons when all radios are selected
- Users can edit a todo item by double clicking the item, then selecting Enter on the keyboard to submit the change
- Users can delete an item in the todo list by selecting the "X" next to the todo item when they hover over the todo item. Once deleted the count of items left is updated to show uncompleted tasks. The item is removed from all lists. 
- User can select All. This will show all uncompleted and completed todos
- User can select Active. This will only show all uncompleted todos
- User can select Completed. This will only show all completed todos
- User can select Clear completed to delete all Completed tasks. All completed tasks will be immediately be removed from view
- Once a todo is added, the user will always see the bottom banner even if there is no todo in the view (All, Active, Completed)
- Refreshing the page starts a new state and the users can start again from scratch

### Test plan (add your own test plan to the bottom of this ReadMe)
For your test strategy, you can add your thoughts and comments at the bottom of this Readme. We've included a template of what we are expecting, but feel free to deviate if you would do it differently.
#### Outline a complete testing strategy that covers unit tests, integration tests, and E2E tests.

#### Describe how you would implement security testing within the testing lifecycle.

#### Propose how automated testing can be integrated into existing CI/CD pipelines.

#### Detail any tools and frameworks you would recommend for the testing process, including any specific for performance and load testing.

#### Discuss how you would ensure the testing strategy aligns with agile development practices.

### 2. Update/Create Playwright tests
We've created two example tests in Playwright, but they could use your help. Can you help improve these existing tests, and write new ones from your test plan? You can find these existing tests in the tests folder of this repo. 

Don't feel like you need to make every single test in your test plan, but we do want to see a good example of your coding. Start by making 6 tests, and then if you are out of time you can make comments of other tests you would have made. 

We also want to see an example of your API testing so we added 3 tests in there using the SWAPI API. More info is in the comments of the todo-CRUD.spec.ts folder of the SWAPI API and what tests we want to see.

Make sure you have run the setup instruction for Playwright from the "Set up TODO MVC" section of this ReadMe.

### 3. Submit bug reports
We've purposely added a handful of bugs to this repo.

In your private github repo, submit those bug reports to your repo



# TodoMVC: React

## Description

This application uses React 17.0.2 to implement a todo application.

-   [React](https://reactjs.org/) is a JavaScript library for creating user interfaces.

## Requirements

The only requirement is an installation of Node, to be able to install dependencies and run scripts to serve a local server.

```
* Node (min version: 18.13.0)
* NPM (min version: 8.19.3)
```

### Test Strategy



#### 1. Unit Testing
- Test small parts of the app like individual React components (e.g., `<TodoItem>`).
- Use Jest to ensure the code behaves as expected.
- Examples:
  - The `<TodoItem>` component should display the correct text.
  - The counter in the `<Footer>` should show the number of active items.

#### 2. Integration Testing
- Test how multiple components work together.
- Verify that actions (like adding a todo) update the `<Footer>` and `<TodoList>` correctly.

#### 3. End-to-End Testing
- Simulate how users interact with the app using Playwright.
- Test scenarios:
  - Add a todo.
  - Mark it complete.
  - Delete it.
  - Filter by "Active" or "Completed" items.

#### 4. Security Testing
- Ensure the app does not allow harmful inputs (e.g., `<script>` tags).
- Test for XSS (Cross-Site Scripting) vulnerabilities.

#### 5. Performance Testing
- Use Playwright to measure page load times.
- Ensure adding/deleting todos works quickly, even with a long list.

#### 6. Automation
- Integrate tests into a CI/CD pipeline (e.g., GitHub Actions).
- Run tests automatically for every code change.