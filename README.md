# Workflow Assignment

A comprehensive test project demonstrating how to set up a modern development workflow from scratch. This repository showcases the integration of Vite as a build tool, along with code quality tools (Prettier, ESLint), automated Git hooks (Husky, lint-staged), and environment variable management.

## 📋 Project Overview

This project serves as a reference implementation for establishing best practices in a JavaScript/TypeScript development environment, including:

- Fast development builds with Vite
- Automated code formatting with Prettier
- Code quality checks with ESLint (using flat config format)
- Pre-commit quality checks with Husky and lint-staged
- Environment-based configuration with Vite's env system
- JSONPlaceholder API integration for posts display

## 🚀 Available NPM Scripts

- `npm run dev`: Starts the development server with Vite (default port: 5173)
- `npm run build`: Builds the project for production
- `npm run preview`: Previews the production build locally
- `npm run lint`: Runs ESLint to check for code quality issues across all JS files
- `npm run format`: Formats all code using Prettier
- `npm run prepare`: Sets up Husky hooks (runs automatically after `npm install`)

## 🪝 Git Hooks

This project uses **Husky** and **lint-staged** to ensure code quality before commits:

- **Pre-commit hook**: Automatically runs Prettier and ESLint on staged files
- Only modified files are checked (performance optimization)
- JavaScript files are formatted and linted
- HTML files are formatted with Prettier

Configuration is in `package.json` under the `lint-staged` section.

## 🔧 Environment Variables

Create environment files in the root directory:

### `.env` (Default)

```env
VITE_API_URL=https://jsonplaceholder.typicode.com/posts
SECRET_KEY=your_secret_key_here
```

### `.env.development` (Development overrides)

```env
VITE_API_URL=https://jsonplaceholder.typicode.com/posts
SECRET_KEY=your_secret_key_here
```

### `.env.example` (Template for other developers)

```env
# API Configuration
VITE_API_URL=https://example-api.com
VITE_PUBLIC_KEY=your-public-key-here
```

**Important Notes:**

- Variables must be prefixed with `VITE_` to be exposed to client-side code
- Never commit `.env` or `.env.local` files (add to `.gitignore`)
- Use `.env.example` as a template for required variables

## 🛠️ Technologies & Configuration

### Build Tool

- **[Vite](https://vitejs.dev/)** (v7.1.7): Lightning-fast frontend build tool with HMR

### Code Quality Tools

- **[ESLint](https://eslint.org/)** (v9.36.0): JavaScript linter using flat config format
  - Uses `@eslint/js` recommended rules
  - Integrated with Prettier via `eslint-plugin-prettier`
  - Configured for browser and Node.js globals
  - Ignores `dist/` and `node_modules/`
- **[Prettier](https://prettier.io/)** (v3.6.2): Opinionated code formatter
  - Single quotes enabled
  - Semicolons enabled
  - Runs as ESLint rule for consistency

### Git Workflow

- **[Husky](https://typicode.github.io/husky/)** (v9.1.7): Git hooks management
- **[lint-staged](https://github.com/okonet/lint-staged)** (v16.2.3): Run linters on staged files only

### Runtime

- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment

## 📝 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/mamf92/workflowassignment.git
   cd workflowassignment
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This automatically runs `npm run prepare` to set up Husky hooks.

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Update the values as needed

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open your browser to the URL shown (typically `http://localhost:5173`)

5. **Build for production**
   ```bash
   npm run build
   npm run preview
   ```

## 📁 Project Structure

```
workflowassignment/
├── src/
│   ├── main.js          # Main application logic (fetches and displays posts)
│   └── style.css        # Application styles
├── .husky/              # Git hooks configuration
├── eslint.config.mjs    # ESLint flat config
├── .prettierrc          # Prettier configuration
├── .env                 # Environment variables (not committed)
├── .env.example         # Environment template
├── package.json         # Project dependencies and scripts
└── README.md            # This file
```

## 🎯 Key Features

- **API Integration**: Fetches posts from JSONPlaceholder API
- **Error Handling**: Graceful error handling for failed API requests
- **Pre-commit Validation**: Code is automatically formatted and linted before commits
- **Modern JavaScript**: Uses ES modules, async/await, and Vite's import.meta.env

## 👤 Author

**Martin Fischer**

---
