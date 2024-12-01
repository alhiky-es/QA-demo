
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


#### Test Strategy

#### 1. Unit Testing
Definition: Test isolated pieces of logic or functions to ensure they behave as expected.
Tools Used: Jest or Playwright (for basic logic tests).
Focus Areas:
Utility Functions: Verify small reusable functions like calculateRemainingTodos work correctly.
Test cases:
Ensure it correctly counts active todos when given a mix of completed and uncompleted todos.
Handle edge cases like an empty list or a list where all items are completed.
Individual Components: Test React components in isolation using libraries like @testing-library/react.
Ensure <TodoItem> displays the correct title and completion state.
Ensure the <Footer> displays the correct active count based on provided data.

#### 2. Integration Testing

Definition: Test how different components work together in the application.
Tools Used: Playwright.
Focus Areas:
Footer and Todo List Integration:
Verify the footer updates correctly when todos are added or removed.
Test the active count in the footer when todos are marked as completed or uncompleted.
End-to-End Data Flow:
Ensure interactions like adding a todo update all relevant parts of the UI (list, footer, and filters).

#### 3. End-to-End (E2E) Testing

Definition: Test the application from the perspective of the user to ensure workflows behave as expected.
Tools Used: Playwright.
Focus Areas:
CRUD Operations: Ensure that basic create, read, update, and delete functionality works.
Add a todo item.
Edit a todo item.
Delete a todo item.
Filters and State Changes:
Test that filters like "All," "Active," and "Completed" display the correct items.
Verify "Clear Completed" removes only completed items.
Page Behavior:
Ensure the page state resets correctly when refreshed.
Verify the footer remains consistent across various operations.
SWAPI API Tests:
Verify API interactions using https://swapi.dev, such as fetching data and verifying responses.

#### 4. Security Testing

Definition: Ensure the application is secure and does not allow harmful inputs or behaviors.
Tools Used: Playwright, manual inspection.
Focus Areas:
Cross-Site Scripting (XSS):
Verify that special characters in todo items (e.g., <script> tags) are escaped and do not execute malicious scripts.
Test with various harmful payloads and ensure the app displays them safely without executing any unintended behavior.
Validation of Inputs:
Ensure that inputs are validated to prevent injection attacks or invalid data.

#### 5. Performance Testing

Definition: Ensure the application performs efficiently under various conditions.
Tools Used: Playwright with performance measurement plugins.
Focus Areas:
Page Load Time:
Verify that the page loads quickly, even when the todo list contains a large number of items.
Response Time:
Measure the time taken to add, update, delete, or filter todos.
Stress Testing:
Simulate scenarios with 100+ todos and verify that the app remains responsive and functional.

#### 6. Automation

Definition: Integrate tests into CI/CD pipelines for automatic validation of code changes.
Tools Used: GitHub Actions, Playwright's built-in CI configuration.
Focus Areas:
Automated Test Execution:
Run unit, integration, and E2E tests automatically for every pull request or code change.
Regression Testing:
Ensure new changes do not break existing functionality.
Coverage Reports:
Generate and monitor test coverage reports to ensure sufficient test coverage.

#### 7. Alignment with Agile Practices

Frequent Testing: Automate tests to run after every sprint or code commit.
Continuous Integration: Integrate tests into the CI pipeline to catch issues early.
Collaboration: Ensure developers and QA teams collaborate on defining and updating test cases.
User Feedback: Use E2E tests to simulate real user interactions and prioritize fixes or updates based on user needs.
Updated Folder Structure for Tests
The test structure has been organized into categories to reflect the updated strategy:


QA-ToDo-Assessment/
├── .git/                        # Git version control metadata
├── .github/                     # GitHub-related workflows and configurations
│   └── workflows/
│       └── playwright.yml       # GitHub Actions workflow for CI/CD with Playwright
├── .nyc_output/                 # NYC output for coverage (auto-generated)
├── coverage/                    # Test coverage reports (auto-generated)
│   ├── index.html               # Coverage report in HTML
│   ├── lcov-report/             # LCov coverage files
│   └── ...
├── dist/                        # Built files for the application
│   ├── app.bundle.js            # Compiled JavaScript bundle
│   ├── app.css                  # Compiled CSS
│   ├── index.html               # Main entry point for the application
│   └── ...
├── node_modules/                # Node.js dependencies (auto-generated)
├── playwright-report/           # Playwright test reports (auto-generated)
│   ├── index.html               # Test report in HTML
│   └── ...
├── test-results/                # Trace files for Playwright tests (auto-generated)
│   ├── trace.zip                # Trace file for debugging
│   └── ...
├── tests/                       # Test cases for the project
│   ├── e2e/                     # End-to-end (E2E) tests
│   │   ├── crud.spec.ts         # CRUD operations test cases
│   │   ├── page-behavior.spec.ts # Page behavior tests
│   │   ├── state-and-filter.spec.ts # Filtering and state management tests
│   │   └── swapi.spec.ts        # API testing with SWAPI
│   ├── integration/             # Integration tests
│   │   └── FooterTodoList.spec.ts # Integration of Footer and TodoList components
│   ├── performance/             # Performance tests
│   │   └── Load.spec.ts         # Performance and load testing
│   ├── security/                # Security tests
│   │   └── Xss.spec.ts          # Tests for XSS vulnerabilities
│   ├── unit/                    # Unit tests
│   │   ├── Footer.spec.ts       # Unit tests for Footer component
│   │   ├── TodoItem.spec.ts     # Unit tests for TodoItem component
│   │   └── utils.spec.ts        # Unit tests for utility functions
├── .gitignore                   # Files and directories to ignore in Git
├── package.json                 # Node.js dependencies and project scripts
├── package-lock.json            # Auto-generated dependency lock file
├── playwright.config.ts         # Playwright configuration
├── README.md                    # Project documentation
└── .nycrc                        # NYC configuration for coverage reporting