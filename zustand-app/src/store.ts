import { create } from 'zustand';
import { Task, TaskStatus } from './shared/Task';

interface Store {
  tasks: Task[];
}

const store = () => ({
  tasks: [
    new Task(
      '1',
      'Sample Task 1',
      'This is a sample task.',
      TaskStatus.PLANNED
    ),
    new Task(
      '2',
      'Sample Task 2',
      'This is another sample task.',
      TaskStatus.ONGOING
    ),
    new Task(
      '3',
      'Sample Task 3',
      'This task is completed.',
      TaskStatus.COMPLETED
    ),
  ],
});

export const useStore = create<Store>(store);
