# Tasty Reacts

Welcome to Tasty Reacts, a modern web application built with Vite and React. This project showcases the use of cutting-edge tools and technologies to deliver a seamless and high-performance web experience. The application is a client-side SPA that presents a variety of recipes from different cuisines, making it easy for users to explore and find delicious dishes.

# Table of Contents
1. Introduction
2. Features
3. Installation
4. Usage
5. Technologies Used

# Introduction
Tasty Reacts is designed to provide a delightful user experience with fast load times and smooth interactions. By leveraging Vite for development and build processes, the app ensures optimal performance and a streamlined developer experience.

# Features
1. Fast Development: Utilizes Vite for instant hot module replacement and lightning-fast builds.
2. Modern React: Built with React to create dynamic and interactive user interfaces.
3. Modular Structure: Organized codebase for easy maintenance and scalability.
4. State Management: Efficient state management using React hooks and context API.
5. Routing: Client-side routing with React Router.

# Installation
1. Clone the repository:
**git clone https://github.com/haramnasir24/tasty-reacts.git**

2. Navigate to the project directory:
**cd tasty-reacts**

3. Install dependencies:
**npm install**

# Usage
1. Run the development server: **npm run dev**
2. Build the project for production: **npm run build**
3. Preview the production build: **npm run preview**

# Technologies Used
1. **Vite**: A next-generation front-end build tool that significantly improves the development experience.
2. **React**: A powerful JavaScript library for building user interfaces.
3. **React Router**: A library for handling client-side routing in React applications.
4. **ShadCN**: For importing badge, and card components
5. **TailwindCSS**: A utility-first CSS framework that streamlines web development by providing a set of pre-designed utility classes
6. **CSS Modules**: Scoped and modular CSS to avoid naming conflicts and ensure maintainability.
7. **ESLint**: A tool for identifying and fixing linting issues in JavaScript code.

## Future Improvements:
1. use React helmet for meta tags (SEO)
2. implement this app in a framework (NextJS) for performance

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
