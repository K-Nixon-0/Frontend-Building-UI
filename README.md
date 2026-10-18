# Book & Notes Vault

A lightweight web application for managing your personal book library, notes, and reading progress efficiently. Built with modern JavaScript (ES modules) and styled with clean CSS, it stores your data securely right inside your browser's local storage.

---

## Features

* **Add & Manage Entries**: Easily add books with titles, authors, page counts, tags, and dates.
* **Live Search & Filtering**: Instantly search and filter through entries using dynamic regular expressions.
* **Sorting Capabilities**: Sort your book collection alphabetically by title, by page length, or by date added.
* **Data Persistence**: Automatically saves your data using browser `localStorage`.
* **Import & Export**: Backup your entire library into a JSON file or restore data seamlessly.
* **Input Validation**: Robust regex-based validation ensures clean data entry.

---

## Project Structure & File Guide

| File Name | Description |
| :--- | :--- |
| `index.html` | The main webpage containing the user interface, form controls, navigation, and the data table display. |
| `styles/style.css` | The stylesheet responsible for the layout, design, and styling of the application elements. |
| `scripts/ui.js` | Handles core user interface logic, rendering tables, updating statistics, form submissions, and import/export actions. |
| `scripts/state.js` | Manages application state synchronization with local storage handlers. |
| `scripts/storage.js` | Handles data interaction with browser `localStorage` (`load` and `save` operations). |
| `scripts/search.js` | Provides utility functions for compiling regular expressions and highlighting search matches]. |
| `scripts/validators.js` | Contains regular expression validation rules for titles, page counts, dates, tags, and advanced checks. |
| `seed.js` | Provides initial sample data structure to populate the application. |
| `tests.html` | A testing page designed to run unit tests on the validation logic. |

---

## Requirements

* A modern web browser supporting ES6 modules (Chrome, Firefox, Edge, Safari).
* A local development environment or server (such as VS Code's Live Server extension) to run the modular JavaScript files correctly.
