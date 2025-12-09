# Getting Started with Zustand

- Firstly, you'll need to install Zustand in your React project (it also works with other frameworks, but React is the most common use case). You can do this using npm or yarn:

  ```bash
  pnpm install zustand
  ```

- Once you have Zustand installed, you can create a store. A store is where your state lives. You can create a store using the `create` function provided by Zustand. Here's a simple example:

  ```TS
  import create from 'zustand';

  // Define the store
  import { create } from 'zustand';
  import { Task, TaskStatus } from './shared/Task';

  const store = set => ({
    tasks: [
        new Task('Sample Task 1', 'This is a sample task.', TaskStatus.PLANNED),
    ],
  });

  export const useStore = create(store);
  ```

  ```TSX
  // Usage in a React component
  import { useStore } from './store';

    function TaskList() {
        const tasks = useStore(store => store.tasks);
        /*
           If you need a filtered list, you can do something like this:
           const plannedTasks = useStore(store => store.tasks.filter(task => task.status === TaskStatus.PLANNED), shallow); // Using zustand's shallow for comparison to avoid unnecessary re-renders

           OR:

           const plannedTasks = useStore(store => store.tasks.filter(task => task.status === TaskStatus.PLANNED), (prev, next) => prev.length === next.length && prev.every((task, index) => task === next[index])); // Custom comparison function

           OR:

           import { useMemo } from 'react';
           const tasks = useStore(store => store.tasks);
           const plannedTasks = useMemo(() => tasks.filter(task => task.status === TaskStatus.PLANNED), [tasks]); // Memoizing the filtered list based on tasks array
        */

        return (
        <ul>
            {tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
            ))}
        </ul>
        );
    }
  ```
