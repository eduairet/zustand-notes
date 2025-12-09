export const TaskStatus = {
  PLANNED: 'PLANNED',
  ONGOING: 'ONGOING',
  COMPLETED: 'DONE',
} as const;

export type TaskStatusType = (typeof TaskStatus)[keyof typeof TaskStatus];

export const statusColors: Record<TaskStatusType, string> = {
  [TaskStatus.PLANNED]: 'sky-500',
  [TaskStatus.ONGOING]: 'fuchsia-600',
  [TaskStatus.COMPLETED]: 'emerald-600',
};

export class Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatusType;

  constructor(
    id: string,
    title: string,
    description: string = 'No description provided.',
    status: TaskStatusType = TaskStatus.PLANNED
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
