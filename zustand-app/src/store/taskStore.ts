import { create } from 'zustand';
import { Task, type TaskStatusType } from '../shared/task';

interface TaskStore {
  tasks: Task[];
  addTask: (title: string, description: string, status: TaskStatusType) => void;
}

const taskStore = (
  set: (
    partial: Partial<TaskStore> | ((state: TaskStore) => Partial<TaskStore>)
  ) => void
): TaskStore => ({
  tasks: [],
  addTask: (title: string, description: string, status: TaskStatusType) => {
    const newTask = new Task(crypto.randomUUID(), title, description, status);
    set(state => ({
      tasks: [...state.tasks, newTask],
    }));
  },
});

export const useTaskStore = create<TaskStore>(taskStore);
