import { TASK_STATUS } from '../shared';
import Column from './Column';

export default function Main() {
  return (
    <main className="m-auto w-full max-w-7xl h-full p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Column state={TASK_STATUS.PLANNED} />
      <Column state={TASK_STATUS.ONGOING} />
      <Column state={TASK_STATUS.COMPLETED} />
    </main>
  );
}
