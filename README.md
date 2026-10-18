# Book & Notes Vault

A lightweight web application for managing your personal book library, notes, and reading progress efficiently. Built with modern JavaScript (ES modules) and styled with clean CSS, it stores your data securely right inside your browser's local storage.

---

## Features

* **Add & Manage Entries**: Easily add books with titles, authors, page counts, tags, and dates[cite: 2, 3, 9].
* **Live Search & Filtering**: Instantly search and filter through entries using dynamic regular expressions[cite: 2, 5, 8].
* **Sorting Capabilities**: Sort your book collection alphabetically by title, by page length, or by date added[cite: 2, 8].
* **Data Persistence**: Automatically saves your data using browser `localStorage`[cite: 6, 7].
* **Import & Export**: Backup your entire library into a JSON file or restore data seamlessly[cite: 2, 8].
* **Input Validation**: Robust regex-based validation ensures clean data entry[cite: 8, 9].

---

## Project Structure & File Guide

| File Name | Description |
| :--- | :--- |
| `index.html` | The main webpage containing the user interface, form controls, navigation, and the data table display[cite: 2]. |
| `styles/style.css` | The stylesheet responsible for the layout, design, and styling of the application elements. |
| `scripts/ui.js` | Handles core user interface logic, rendering tables, updating statistics, form submissions, and import/export actions[cite: 8]. |
| `scripts/state.js` | Manages application state synchronization with local storage handlers[cite: 6]. |
| `scripts/storage.js` | Handles data interaction with browser `localStorage` (`load` and `save` operations)[cite: 7]. |
| `scripts/search.js` | Provides utility functions for compiling regular expressions and highlighting search matches[cite: 5]. |
| `scripts/validators.js` | Contains regular expression validation rules for titles, page counts, dates, tags, and advanced checks[cite: 9]. |
| `seed.js` | Provides initial sample data structure to populate the application[cite: 3]. |
| `tests.html` | A testing page designed to run unit tests on the validation logic[cite: 4]. |

---

## Requirements

* A modern web browser supporting ES6 modules (Chrome, Firefox, Edge, Safari).
* A local development environment or server (such as VS Code's Live Server extension) to run the modular JavaScript files correctly.
