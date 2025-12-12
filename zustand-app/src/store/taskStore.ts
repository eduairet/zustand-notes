import { create } from 'zustand';
import { Task, TASK_STATUS, type TaskStatusType } from '../shared/task';

interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description: string, status: TaskStatusType) => void;
}

const taskStore = (
  set: (
    partial: Partial<TaskStore> | ((state: TaskStore) => Partial<TaskStore>)
  ) => void
): TaskStore => ({
  tasks: [
    new Task(
      '1',
      'Sample Task 1',
      'This is a sample task.',
      TASK_STATUS.PLANNED
    ),
    new Task(
      '2',
      'Sample Task 2',
      'This is another sample task.',
      TASK_STATUS.ONGOING
    ),
    new Task(
      '3',
      'Sample Task 3',
      'This task is completed.',
      TASK_STATUS.COMPLETED
    ),
  ],
  addTask: (title: string, description: string, status: TaskStatusType) => {
    const newTask = new Task(crypto.randomUUID(), title, description, status);
    set(state => ({
      tasks: [...state.tasks, newTask],
    }));
  },
});

export const useTaskStore = create<TaskStore>(taskStore);
