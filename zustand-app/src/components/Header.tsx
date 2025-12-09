import dot from '../assets/dot.svg';

export default function Header() {
  return (
    <header className="m-auto flex gap-2 items-center p-2 mt-6 mb-10 border-3 border-black rounded-full">
      <img src={dot} className="h-10 w-10 block" alt="logo" />
      <h1 className="text-3xl font-bold uppercase">Zustand App</h1>
      <img src={dot} className="h-10 w-10 block" alt="logo" />
    </header>
  );
}
