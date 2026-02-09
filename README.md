# Simple Blog App

A lightweight, browser-based blog app that demonstrates clean DOM manipulation, defensive input handling, and persistent storage using localStorage. Built with plain HTML, CSS, and JavaScript.

## Features
- Create posts with title and content validation (defensive checks for empty input).
- Update posts by ID with input validation and safe state updates.
- Delete posts with clear feedback when an ID does not exist.
- Persistent data using localStorage (refresh-safe).
- Instant UI re-render after every change.
- Accessible, responsive form styling and readable layout.

## Why This Matters
This project shows practical front-end skills:
- State management without frameworks (arrays + localStorage).
- DOM rendering from data, not hard-coded HTML.
- Defensive programming to handle invalid input and edge cases.
- Clear separation of concerns: input handling, data updates, and UI rendering.

## Tech Stack
- HTML
- CSS
- JavaScript (vanilla)

## How To Run
1. Open index.html in a browser.
2. Add, update, and delete posts from the UI.

## Project Structure
- index.html
- style.css
- script.js

## Notes For Reviewers
- Uses max-id logic to assign new post IDs.
- Updates storage and UI in a single flow for consistency.
- No external libraries or frameworks.
