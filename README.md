## Project Structure

This project uses the Atomic Design methodology, which breaks down UI components into five categories:

1. **Atoms** – The smallest building blocks (e.g., buttons, inputs).
2. **Molecules** – Groups of atoms that work together.
3. **Organisms** – Complex groups of molecules that form distinct sections of the UI .
4. **Templates** – Page layouts composed of organisms, providing structure.
5. **Pages** – Fully fleshed-out templates, forming the full application view.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

## Installation

1. Clone this repository:

   ```bash
   git clone <https://github.com/Victor-udenna/ssl-dashboard.git>
   cd dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open the application at [http://localhost:5173/](http://localhost:5173/)

## Project Setup

### Styling with Styled component

Each component has a corresponding Styled-Component file for modular styling, following the same folder structure as components. .

## Available Scripts

- **`npm run dev`** – Starts the development server.
- **`npm run build`** – Builds the application for production.
