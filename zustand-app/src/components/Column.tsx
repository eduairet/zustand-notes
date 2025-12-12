import { useMemo } from 'react';
import { STATUS_BG, type TaskStatusType } from '../shared';
import { useTaskStore } from '../store/taskStore';
import TaskCard from './TaskCard';
import ButtonIcon from './ButtonIcon';

interface IProps {
  state: TaskStatusType;
}

export default function Column({ state }: IProps) {
  const { tasks, addTask } = useTaskStore();

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => task.status === state);
  }, [tasks, state]);

  const handleAddTask = (title: string, description: string, state: TaskStatusType) => {
    document.startViewTransition(() => {
      addTask(title, description, state);
    });
  };

  return (
    <section className="p-4 bg-gray-50 shadow-lg border border-gray-300 rounded-2xl w-full h-full ">
      <header className="mb-4 flex flex-row justify-between items-center">
        <h2 className="text-2xl font-bold  flex items-center gap-2">
          <span
            className={`w-5 h-5 block rounded-full ${STATUS_BG[state]}`}
          ></span>
          {state}
        </h2>
        <ButtonIcon
          icon="PLUS"
          label="Add task"
          onClick={() => handleAddTask('New Task', 'Description', state)}
        />
      </header>
      <div className="flex flex-col gap-4">
        {filteredTasks.map((task, index) => (
          <TaskCard
            key={`task-${task.status.toLowerCase()}-${index}`}
            task={task}
          />
        ))}
      </div>
    </section>
  );
}
