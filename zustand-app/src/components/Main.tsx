import { TaskStatus } from '../shared';
import Column from './Column';

export default function Main() {
  return (
    <main className="m-auto w-full max-w-7xl h-full p-4 grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Column state={TaskStatus.PLANNED} />
      <Column state={TaskStatus.ONGOING} />
      <Column state={TaskStatus.COMPLETED} />
    </main>
  );
}
