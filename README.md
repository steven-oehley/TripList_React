# TripList_React ⚛︎

## Introduction

Welcome to the TripList_React project! This application is a simple yet effective way to list trips and their details. The primary goal of this project is to practice and demonstrate the usage of a custom useFetch hook for fetching data from an API. The project is built with modern web technologies including React and Material UI.

## Technologies Used

- React: A JavaScript library for building user interfaces. React allows for the creation of reusable UI components.
- Material UI: A popular React UI framework that provides a set of components and styles that follow Google's Material Design guidelines.
- Tailwind CSS: A utility-first CSS framework that allows for quick and efficient styling of components.
- JavaScript (ES6+): The core programming language used for writing React components and the custom hook.
- HTML/CSS: Standard technologies for structuring and styling the web application.
- JSON Server: A tool for creating a mock REST API based on a JSON file.

## Project Structure

The project follows a structured and organized layout to maintain clarity and scalability. Here's an overview of the main directories and files:

```
TripList_React/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── TripCard.js
│   │   ├── TripList.js
│   │   ├── ErrorDisplay.js
│   │   └── ...
│   ├── hooks/
│   │   └── useFetch.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── data/
│   └── db.json
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Components

- TripCard.js: A component that displays individual trip details.
- TripList.js: The main component that fetches and displays a list of trips. It includes buttons to filter trips and handles loading and error states.
- ErrorDisplay.js: A component to display error messages.

## Custom Hook

- useFetch.js: A custom hook that handles data fetching, loading states, and error handling. This hook is designed to be reusable across different components.

## Other Files

- App.js: The root component that renders the TripList component.
- index.js: The entry point of the React application, rendering the App component.
- db.json: The JSON file used by json-server to create a mock API.

## Why This Project Was Built

The main motivation behind building this project was to practice and enhance understanding of custom hooks in React, particularly the useFetch hook. By creating a real-world application, it provides a hands-on approach to learning and mastering:

- Data Fetching: Understanding how to fetch data from an API, handle loading states, and manage errors effectively.
- Component Composition: Structuring a React application with reusable components.
- State Management: Managing state within functional components using React hooks.
- Styling: Applying modern CSS frameworks like Tailwind CSS and Material UI to style components.

## How to Run the Project

To run this project locally, follow these steps:

1. Clone the repository:

```
git clone https://github.com/steven-oehley/TripList_React.git
```

2. Navigate to the project directory:

```
cd TripList_React
```

3. Install the dependencies:

```
npm install
```

4. Run the JSON Server:

```
npx json-server --watch ./data/db.json --port 3001
```

5. Start the development server:

```
npm start
```

- React will typically ask if you want to run the app on another port since the mock server is running on port 3000. Confirm to run it on another port, and it will open on http://localhost:3001.
