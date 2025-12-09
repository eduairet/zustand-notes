import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto] bg-gray-100 text-gray-900">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
