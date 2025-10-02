# Workflow Assignment

A comprehensive test project demonstrating how to set up a modern development workflow from scratch. This repository showcases the integration of Vite as a build tool, along with code quality tools (Prettier, ESLint), automated Git hooks (Husky), and environment variable management.

## 📋 Project Overview

This project serves as a reference implementation for establishing best practices in a JavaScript/TypeScript development environment, including:

- Fast development builds with Vite
- Automated code formatting and linting
- Pre-commit quality checks
- Environment-based configuration

## 🚀 Available NPM Scripts

- `npm run dev`: Starts the development server with Vite
- `npm run build`: Builds the project for production
- `npm run preview`: Previews the production build locally
- `npm run lint`: Runs ESLint to check for code quality issues
- `npm run lint:fix`: Automatically fixes ESLint issues where possible
- `npm run format`: Formats code using Prettier
- `npm run prepare`: Sets up Husky hooks (runs automatically after `npm install`)

## 🔧 .env Setup

Create a `.env` file in the root directory for environment variables:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=My App
```

**Important:** Variables must be prefixed with `VITE_` to be exposed to the client-side code.

### Environment Files

- `.env`: Default environment variables
- `.env.local`: Local overrides (not committed to Git)
- `.env.production`: Production-specific variables

## 🛠️ Technologies Used

- **[Vite](https://vitejs.dev/)**: Next-generation frontend build tool
- **[Prettier](https://prettier.io/)**: Opinionated code formatter
- **[ESLint](https://eslint.org/)**: Pluggable linting utility for JavaScript
- **[Husky](https://typicode.github.io/husky/)**: Git hooks made easy
- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment

## 📝 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create your `.env` file (see .env Setup above)
4. Start the development server:
   ```bash
   npm run dev
   ```

## 👤 Author

**Martin Fischer**

---

_This project was created as a learning exercise for modern JavaScript development workflows._
