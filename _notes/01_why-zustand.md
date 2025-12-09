# Why Zustand?

- As an engineer your main goal with React is to manage its state to manipulate the UI.
- There are several ways to manage state in React, from local component state using `useState` or `useReducer`, to more complex global state management solutions like Redux, MobX, or Context API.
- However, many of these solutions can be overkill for simple applications, leading to unnecessary complexity and boilerplate code.
- Zustand offers a minimalistic approach to state management that is easy to set up and use, while still being powerful enough to handle complex state logic.
  - It has very minimal boilerplate code, making it easy to get started quickly.
  - It does not require a lot of configuration or setup.
  - It does not require to use providers or higher-order components.
  - It's faster than many other state management, including Redux and Context API, both for high-frequency updates and large state trees.
  - It merges state by default, reducing the need for manual state updates.
  - It's extendable by default, allowing for middleware and custom hooks.
  - It's little opinionated, giving developers the freedom to structure their state as they see fit.
