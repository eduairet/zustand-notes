import { useMemo } from 'react';
import { statusColors, Task, type TaskStatusType } from '../shared';
import { useStore } from '../store';
import TaskCard from './TaskCard';

interface IProps {
  state: TaskStatusType;
}

export default function Column({ state }: IProps) {
  const tasks: Task[] = useStore(store => store.tasks);
  const filteredTasks = useMemo(() => {
    return tasks.filter(task => task.status === state);
  }, [tasks, state]);

  return (
    <div className="p-4 bg-gray-50 shadow-lg border border-gray-300 rounded-2xl w-full h-full ">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <span
          className={`w-5 h-5 block rounded-full bg-${statusColors[state]}`}
        ></span>
        {state}
      </h2>
      <div className="flex flex-col gap-4">
        {filteredTasks.map((task, index) => (
          <TaskCard
            key={`task-${task.status.toLowerCase()}-${index}`}
            task={task}
          />
        ))}
      </div>
    </div>
  );
}
