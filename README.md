# Keeper App

## Description

The Keeper App is a simple note-taking application built with React. It allows users to create, view, and delete notes. The app features a clean and intuitive interface, with a header and footer, and utilizes Material UI components for enhanced user experience.

## Features

- **Create Notes**: Add new notes with titles and content.
- **View Notes**: Display all saved notes.
- **Delete Notes**: Remove notes from the list.
- **Responsive UI**: Utilizes Material UI for a modern and responsive design.

## Technologies Used

- React
- Material UI
- JavaScript
- HTML & CSS

## Components

### App

The main component that manages the state of notes and renders `Header`, `CreateArea`, `Note`, and `Footer` components.

- **State Management**: Uses `useState` to handle the notes.
- **Functions**:
  - `saveElement(note)`: Adds a new note to the list.
  - `deleteNote(id)`: Removes a note by its index.

### CreateArea

A component for creating new notes.

- **State Management**: Manages the form state, including the visibility of the input fields.
- **Functions**:
  - `handle()`: Toggles the form input field visibility.
  - `handleChange(event)`: Updates the note state as the user types.
  - `submit(event)`: Submits the note to the `App` component.

### Note

Displays individual notes with title and content, and includes a delete button.

- **Functions**:
  - `deleteNote()`: Calls the `onDelete` prop function to remove the note.

### Header

Displays the application header with a title and icon.

### Footer

A placeholder component for the footer.

## Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2. Navigate to the project directory:
    ```bash
    cd <project-directory>
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open the app in your browser. 
2. Use the form in the `CreateArea` component to add new notes.
3. Click on the delete icon to remove notes.

## Acknowledgments

- [React](https://reactjs.org/) - JavaScript library for building user interfaces.
- [Material UI](https://mui.com/) - React components for faster and easier web development.
