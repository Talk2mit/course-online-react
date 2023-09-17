
# Online Course Marketplace

Welcome to the Online Course Marketplace project! This project showcases a list of online programming courses with various features and state management techniques.

## Table of Contents
- [Project Features](#project-features)
- [State Management](#state-management)

### Project Features

1. **User-Friendly Interface**: The application provides a user-friendly interface for browsing and selecting online courses. Users can view course details, including the course title, description, price, and credits.

2. **Dynamic Course Listing**: The project dynamically lists courses with images, titles, and descriptions. Each course is represented as a card with essential information, making it easy for users to explore their options.

3. **Enrollment and Pricing**: Users can select courses and see their prices. The "Enroll Now" button allows users to take action and enroll in a course. Prices are displayed prominently to help users make informed decisions.

### State Management

In this project, I used React for the user interface and state management. Here's how I managed the state:

- **Local Component State (useState)**: For individual components, such as course cards, I used React's `useState` hook to manage local component state. This allowed me to handle small-scale state changes, such as whether a course card is selected or not.

- **Context API**: To share state across the application and manage global data, I employed React's Context API. I created a context to store information about selected courses, including their IDs and enrollment status. This allowed me to maintain a consistent state for selected courses throughout the application.

- **React Props**: For passing data down the component tree, I used React props to communicate between parent and child components. For example, when a course card is clicked, I passed the course's ID and enrollment status to the relevant components to update the state.

- **Immutable State**: To ensure a consistent and immutable state, I followed the principles of immutability in React. When updating the state, I created new objects or arrays instead of modifying existing ones, which helps prevent unintended side effects.

By combining these state management techniques, I was able to create a responsive and interactive course marketplace that allows users to select courses and see their enrollment status. The use of local component state and context API facilitated a smooth user experience and ensured data consistency throughout the application.
