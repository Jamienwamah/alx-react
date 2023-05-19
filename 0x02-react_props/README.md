
Curriculum
Short Specializations
Average: 107.6%
0x02. React props
Front-end
JavaScript
ES6
React
 By: Johann Kerbrat, Engineering Manager at Uber Works
 Weight: 1
 Project will start May 18, 2023 6:00 AM, must end by May 23, 2023 6:00 AM
 Manual QA review must be done (request it when you are done with the project)


Resources
Read or watch:

React Official Website
Getting started with React
React overview
React Developer Tools
Enzyme
React Fragments
Typechecking with PropTypes
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

How to create basic React components using functions
How to reuse components
How to pass properties to components
How to define types for components
How to use Fragments
When to use a key to improve a loop’s performance
Requirements
All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node 12.x.x and npm 6.x.x
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
A README.md file, at the root of the folder of the project, is mandatory
Tasks
0. Basic components
mandatory
Start with your files from the last task of the 0x01. React intro project

Instead of creating new elements, we’re going to create components to split the project. The App.js is going to become the main entry point, the shell, for every component in the app.

Create a Header component
Create a new folder Header:

Move the code of the header from the App.js to a new file Header.js
Move the css code, related to the header, of the App.css to a new file named Header.css
Create an empty Header.test.js. We’ll add tests for it later.
Create a Footer component
Create a new folder Footer:

Move the code of the footer from the App.js to a new file Footer.js
Move the css code, related to the footer, of the App.css to a new file named Footer.css
Create a Footer.test.js, we will add the tests later
Create a Login component
Create a new folder Login:

Move the code of the login section from the App.js to a new file Login.js
The code should be wrapped in a React Fragment
Move the css code, related to the login, of the App.css to a new file named Login.css
Create a Login.test.js, we will add the tests later
Modify the shell
In the index.js:

Remove the root-notifications
Remove the Notifications import
In the App.js:

Import Notifications, Login, Footer, and Header
Add the new Notifications component before the div.App element
Wrap Notifications and the rest of the div.App within a React Fragment
In the div.App, replace the header code by the new Header component
In the div.App-body, replace the login code by the new Login component
In the div.App-footer, replace the footer code by the new Footer component
In the App.test.js:

Most tests will fail, only keep the one testing that the component renders without crashing
Requirements:

At this point, reloading the App should display the exact same page as the last task
The console in your browser should not show any error or warning
Repo:

GitHub repository: alx-react
Directory: 0x02-react_props
File: task_0/dashboard/dist/index.html, task_0/dashboard/src/App/App.js, task_0/dashboard/src/Footer/Footer.css, task_0/dashboard/src/Footer/Footer.js, task_0/dashboard/src/Footer/Footer.test.js, task_0/dashboard/src/Header/Header.css, task_0/dashboard/src/Header/Header.js, task_0/dashboard/src/Header/Header.test.js, task_0/dashboard/src/Login/Login.css, task_0/dashboard/src/Login/Login.js, task_0/dashboard/src/Login/Login.test.js
 
1. Write the tests for each component
mandatory
To develop your tests faster, you can watch them. The test suite will run for every change you make:

Add the following script to task_1/package.json: "test-watch": "jest --watch"
Run your suite using npm run test-watch
Header.test.js
Import your new Header component within the test, and write two checks:

Shallow render the Header component to verify it renders without crashing
Verify that the components render img and h1 tags
Login.test.js
Import your new Login component within the test, and write two checks:

Shallow render the Login component to verify it renders without crashing
Verify that the components renders 2 input tags and 2 label tags
Footer.test.js
Import your new Footer component within the test, and write two checks:

Shallow render the Footer component to verify it renders without crashing
Verify that the components at the very least render the text “Copyright”
App.test.js
Modify the App.test.js file, and add four checks:

It should contain the Notifications component
It should contain the Header component
It should contain the Login component
It should contain the Footer component
Requirements:

At this point, running the test suites, should show:
Test Suites: 6 passed, 6 total
Tests: 18 passed, 18 total
Repo:

GitHub repository: alx-react
Directory: 0x02-react_props
File: task_1/package.json, task_1/dashboard/src/Header/Header.test.js, task_1/dashboard/src/Footer/Footer.test.js, task_1/dashboard/src/Login/Login.test.js, task_1/dashboard/src/App/App.test.js
 
2. Split the Notifications component
mandatory
2.1. Create a NotificationItem.js
The Notifications component is repeating the same tags a lot. It will be hard to maintain and reuse. Let’s create a component to support the li generation.

Create a new component named NotificationItem:

it should render a li tag
the component accept three properties (type, html, and value)
type should be rendered with the data-notification-type attribute
value should be rendered within the tag
html should be rendered with the dangerouslySetInnerHTML attribute
Create a NotificationItem.test.js
Every component should be tested. Create a new NotificationItem.test.js file, and add the following checks:

Verify that the basic rendering of the component works without crashing
Verify that by passing dummy type and value props, it renders the correct html (for example: type=“default” and value=“test”)
Verify that by passing a dummy html prop, it renders the correct html (for example: html={{ __html: '<u>test</u>' }})
Modify Notifications.js
Import the new NotificationItem component in the Notifications.js file and replace the <li> tags with NotificationItem components.

Modify Notifications.test.js
Modify the Notifications.test.js file to change one of the check:

Instead of testing if the component renders li, check that the component renders NotificationItem elements
Add a test to verify that the first NotificationItem element renders the right html (note: this is usually not the best way to write tests, but sometimes necessary when you don’t control the child component)
Requirements:

At this point, reloading the App should display the exact same page as the last task
The console in your browser should not show any error or warning
Running the test suites, should show:
Test Suites: 7 passed, 7 total
Tests: 22 passed, 22 total
Repo:

GitHub repository: alx-react
Directory: 0x02-react_props
File: task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.test.js
 
3. Checking the application using the React extension
mandatory
Using the React extension in Chrome:

Modify the type of the first NotificationItem to change from “default” to “urgent”. The first notification should change color to red, take a screenshot
Profile the load of the application and note which Component is the longest to render after App, take a screenshot
Repo:

GitHub repository: alx-react
Directory: 0x02-react_props
File: task_3/change_property.png, task_3/profiler.png
 
4. Props types & Default props & Shapes
mandatory
To work on this task, install prop-types with npm first

Create a CourseListRow component
Create a new folder CourseList and a new component with the name CourseListRow. The component accepts three props:

isHeader (bool, default: false)
textFirstCell (string, required)
textSecondCell (string, default: null)
The component returns a tr html element, and within that element:

if isHeader is true
if textSecondCell is null, it returns a th element containing textFirstCell with a colSpan = 2
if textSecondCell is not null, it returns two th elements containing textFirstCell and textSecondCell
if isHeader is false
it returns two td elements containing textFirstCell and textSecondCell
Create a CourseListRow.test.js file:

When isHeader is true
Add a check to test the component renders one cell with colspan = 2 when textSecondCell does not exist
Add a check to test the component renders two cells when textSecondCell is present
When isHeader is false
Add a check to test the component renders correctly two td elements within a tr element
Create a CourseList component
In the folder CourseList, create a new component named CourseList:

it returns a table element with an id CourseList
it contains a thead element
it includes a CourseListRow with the props textFirstCell="Available courses" and isHeader=true
it includes a CourseListRow with the props textFirstCell="Course name", textSecondCell="Credit", and isHeader=true
it contains a tbody element
it includes a CourseListRow with the props textFirstCell="ES6", textSecondCell="60", and isHeader=false
it includes a CourseListRow with the props textFirstCell="Webpack", textSecondCell="20", and isHeader=false
it includes a CourseListRow with the props textFirstCell="React", textSecondCell="40", and isHeader=false
Create and import a file CourseList.css where you will be able to add the styling for the component

Create a CourseList.test.js with two checks:

Check that it renders CourseList component without crashing
Check that it renders the 5 different rows
Modify the App component
Modify the App component to display either the Login, or the CourseList component:

Import Proptypes
Create a property isLoggedIn. It should be false by default
When isLoggedIn is false, display the Login screen
When isLoggedIn is true, display the CourseList screen
Modify the App test suite:

Add a test to check that CourseList is not displayed
Describe a new case, when isLoggedIn is true, and add two checks. The first one should verify that the Login component is not included. The second one should verify that the CourseList component is included
Modify the NotificationItem component
Define the prop types for the NotificationItem component:

Verify that html is an object with the key __html, and that the value is a string
Require type to be a defined prop and a string. It should default to default if type is not passed by the parent component
Verify that value is a string
Modify the Notifications component
Add a new div element with the class menuItem:

it contains the text Your notifications
it should be display right before div.Notifications
Add a prop to the Notifications component named displayDrawer:

it should be a boolean
by default it should be false
Modify the div.Notifications tag:

it should only be visible when displayDrawer is true
Modify the Notifications.test.js:

Add a check that the menu item is being displayed when displayDrawer is false
Add a check that the div.Notifications is not being displayed when displayDrawer is false
Add a check that the menu item is being displayed when displayDrawer is true
Add a check that the div.Notifications is being displayed when displayDrawer is true
Update the UI
You can use the React extension in Chrome, to toggle the two booleans displayDrawer and isLoggedIn

Notifications:

Modify the CSS to make the UI looks like the image below when displayDrawer is true


Modify the CSS to make the UI looks like the image below when displayDrawer is false


App:

Modify the CSS to make the UI looks like the image below when isLoggedIn is false


Modify the CSS to make the UI looks like the image below when isLoggedIn is true


Requirements:

You should define a default property for every prop that is not required
The console in your browser should not show any error or warning
Running the test suites, should show:
Test Suites: 5 passed, 5 total
Tests: 24 passed, 24 total
Repo:

GitHub repository: alx-react
Directory: 0x02-react_props
File: task_4/dashboard/src/CourseList/CourseListRow.js, task_4/dashboard/src/CourseList/CourseListRow.test.js, task_4/dashboard/src/CourseList/CourseList.js, task_4/dashboard/src/CourseList/CourseList.css, task_4/dashboard/src/CourseList/CourseList.test.js, task_4/dashboard/src/App/App.js, task_4/dashboard/src/App/App.test.js, task_4/dashboard/src/Notifications/NotificationItem.js, task_4/dashboard/src/Notifications/Notifications.js, task_4/dashboard/src/Notifications/Notifications.test.js
 
5. Shapes, Loops, and Keys
mandatory
Create the courses array
Create a new Shape named CourseShape containing:

id (number, required)
name (string, required)
credit (number, required)
Modify CourseList.js:

Add a propType listCourses that will take an array of the shape you created
Make sure that if listCourses is not passed by the parent component the propType defaults to an empty array
When listCourses is empty, display a row showing No course available yet
When listCourses contains at least one element, display a row for each element showing the name of the course and the number of credits
Make sure to add a key to help React optimize rendering
Modify CourseListRow.js:

Make sure the property textSecondCell can accept either a string or number
Modify the App.js to create a new array named listCourses. It should contains three elements:

id: 1, name: ‘ES6’, credit: 60
id: 2, name: ‘Webpack’, credit: 20
id: 3, name: ‘React’, credit: 40
Add a listCourses property to the CourseList component in App

Create the notifications array
Inside the Notifications directory, create a new Shape named NotificationItemShape containing:

an id (number, required)
a html (object of { \_\_html: string })
a type (string, required)
a value (string)
Modify Notifications:

Add a proptype listNotifications that will take an array of the shape you just created
When listNotifications is empty, display a row showing No new notification for now
When listNotifications contains at least one element, display a NotificationItem for each element of the array
Modify the App to create a new array named listNotifications. It should contains all the previous elements we used to have in Notifications elements. Add an id for each element.

Add the property listNotifications to the Notifications component in App

Update the tests
Modify Notifications.test.js:

Add a new test to verify that Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property
Add a new test to verify that when you pass a list of notifications, the component renders it correctly and with the right number of NotificationItem
Add a new test to verify that when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is
Modify CourseList.test.js:

Add a new test to verify that CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property
Add a new test to verify that when you pass a list of courses, the component renders it correctly
Requirements:

When writing your tests, look into using describe and beforeEach for each scenario (e.g. With CourseList Empty, With CourseList containing elements)
You should define a default property for every prop that is not required
The console in your browser should not show any error or warning
Running the test suites, should show:
Test Suites: 9 passed, 9 total
Tests: 37 passed, 37 total
Repo:

GitHub repository: alx-react
Directory: 0x02-react_props
File: task_5/dashboard/src/CourseList/CourseShape.js, task_5/dashboard/src/CourseList/CourseList.js, task_5/dashboard/src/CourseList/CourseListRow.js, task_5/dashboard/src/App/App.js, task_5/dashboard/src/Notifications/NotificationItemShape.js, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/NotificationItem.test.js, task_5/dashboard/src/CourseList/CourseList.test.js
 
Copyright © 2023 ALX, All rights reserved.