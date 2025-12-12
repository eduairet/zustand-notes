import { STATUS_BG, Task } from '../shared/task';

interface IProps {
  task: Task;
}

export default function TaskCard({ task }: IProps) {
  return (
    <article className="p-4 bg-white rounded-lg border border-gray-300 shadow flex flex-col gap-2 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <h2 className="text-xl font-bold flex items-center gap-2">
        {task.title}
      </h2>
      <p className="text-lg">{task.description}</p>
      <div
        className={`ml-auto mr-0 w-fit text-sm py-1 px-2 text-white rounded-sm ${
          STATUS_BG[task.status]
        }`}
      >
        {task.status}
      </div>
    </article>
  );
}
