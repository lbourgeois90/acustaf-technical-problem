## AcuStaf Technical Problem
Application that sends an API request to https://jsonplaceholder.typicode.com/ to receive To-Do list items. Request is limited to 50 JSON objects. The To-Do list data is rendered in meaningful way for users to see the title of the task and whether that task was completed or not. Completion is displayed using checkboxes; if an item has been completed the checkbox is rendered as checked or if not completed is rendered as an empty checkbox. Users can check the boxes to change the status of the task to completed or not completed.

User has the ability to create a task and add it to the list. User also has the ability to delete a task.

## Deployed
Deployment would be done via Heroku


## Built With

- HTML
- Javascript
- React
- Redux
- Material-UI
- Axios
- Express
- Node
- Jest

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [IDE - Virtual Studio Code Recommended](https://code.visualstudio.com/)

### Installing


1. Download this project via zip
2. Create a repository on github for this project
3. Open downloaded zip of project in your IDE
4. Follow the instructions outlined on Github for ... or create a new repository on the command line (these immediately follow the creation of a new repository)
5. In terminal, type `npm install` to install all necessary dependencies in package.json
6. In terminal, create development server by typing `npm run client` and `npm run server` (this will run application locally)

## Screen Shot
<img src="/public/images/screen-shot1.png/">


### Completed Features
- [x] Create client-side API endpoint GET request with limit of 50 to https://jsonplaceholder.typicode.com/todos
- [x] Create client-side API endpoint POST request with user inputted task
- [x] Create client-side API endpoint PUT request to update completed status of task
- [x] Create client-side API endpoint DELETE request to delete task
- [x] Create Reducer to store data received from GET request
- [x] Create ToDoList to map through data 
- [x] Create ToDoListItem to display all items on DOM
- [x] Toggle between checked and unchecked which changes status of task completion and dispatches PUT request
- [x] Styling with Material-UI

### Next Steps
- [ ] Move API endpoint data to database to complete functionality of POST, PUT and DELETE methods
- [ ] Functionality to edit task 



