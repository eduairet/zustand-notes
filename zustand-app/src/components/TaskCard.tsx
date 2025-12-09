import { statusColors, Task } from '../shared/Task';

interface IProps {
  task: Task;
}

export default function TaskCard({ task }: IProps) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-300 shadow flex flex-col gap-2">
      <h2 className="text-xl font-bold flex items-center gap-2">
        {task.title}
      </h2>
      <div className="text-lg">{task.description}</div>
      <div>
        <div
          className={`ml-auto mr-0 w-fit text-sm py-1 px-2 text-white rounded-sm bg-${
            statusColors[task.status]
          }`}
        >
          {task.status}
        </div>
      </div>
    </div>
  );
}
