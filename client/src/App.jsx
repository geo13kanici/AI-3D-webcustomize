import './App.css';
import Canvas from './canvas';
import Home from './pages/Home';
import CustomizePage from './pages/CustomizePage';

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <CustomizePage />

      <div className="hidden md:flex flex-col items-end justify-end -mx-1 -mt-[800px]">
        <img
          src="/cercle.png"
          className="w-fit h-[450px] object-contain drop-shadow-2xl shadow-black border border-l-[#d19200]"
          alt="bg-img"
        />
        <p className="mx-72 rotate-90 -mt-[0px] text-[#FFD700]">
          Create your unique and exclusive{' '}
          <strong className="text-black">
            shirt with our new 3D branding tool.
          </strong>
        </p>
        <p className="mx-40 rotate-90 -mt-[24px] text-[#D1B000]">
          Create your unique and exclusive{' '}
          <strong className="text-[#867930]">
            {' '}
            shirt with our new 3D branding tool.
          </strong>
        </p>
        <p className="mx-56 rotate-90 -mt-[24px] text-[#d19200]">
          Create your unique and exclusive{' '}
          <strong className="text-[#d16900]">
            shirt with our new 3D branding tool.
          </strong>
        </p>
        <img
          src="/cercle.png"
          className="w-fit h-[450px] object-contain -mt-[26px] drop-shadow-2xl shadow-black opacity-10 border border-l-[#d19200]"
          alt="bg-img"
        />
      </div>

      <div className="hidden md:absolute right-20 md:flex flex-col -mt-36 underline ">
        <p className="text-xs text-[#d16900]">
          &copy; Design by i-create - {new Date().getFullYear()}
        </p>
      </div>
    </main>
  );
}

export default App;
