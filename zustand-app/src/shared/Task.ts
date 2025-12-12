export const TASK_STATUS = {
  PLANNED: 'PLANNED',
  ONGOING: 'ONGOING',
  COMPLETED: 'DONE',
} as const;

export type TaskStatusType = (typeof TASK_STATUS)[keyof typeof TASK_STATUS];

export const STATUS_BG: Record<TaskStatusType, string> = {
  [TASK_STATUS.PLANNED]: 'bg-sky-500',
  [TASK_STATUS.ONGOING]: 'bg-fuchsia-600',
  [TASK_STATUS.COMPLETED]: 'bg-emerald-600',
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
    status: TaskStatusType = TASK_STATUS.PLANNED
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
