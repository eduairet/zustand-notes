import dot from './assets/dot.svg';

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-100 text-gray-900">
      <header className="m-auto flex gap-2 items-center p-1 mt-6 border-3 border-black rounded-full">
        <img src={dot} className="h-10 w-10 block" alt="logo" />
        <h1 className="text-3xl font-bold uppercase">Zustand App</h1>
        <img src={dot} className="h-10 w-10 block" alt="logo" />
      </header>
      <main className="m-auto w-full max-w-7xl p-4">
        <p className="text-center text-lg">
          This is a simple Zustand app with Vite, React, and Tailwind CSS.
        </p>
      </main>
      <footer className="w-full p-4 text-center text-sm">
        Zustand App by{' '}
        <a href="https://github.com/eduairet" className="underline">
          eat
        </a>
      </footer>
    </div>
  );
}

export default App;
