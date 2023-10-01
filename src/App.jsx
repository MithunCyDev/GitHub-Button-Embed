import "./App.css";
import { Details } from "./Componant/Details";
import Repository from "./Componant/Repository";


function App() {
  return (
    <section className="w-full h-full bg-gradient-to-t from-pureBlack via-black to-black flex flex-col 
    font-[roboto] items-center justify-center border-4 border-t-green">
      <Details/>
      <Repository username="mithuncy01"/>

      <div className="w-full h-20 bg-pureBlack border border-t-black flex items-center justify-center mt-5">
        <h1 className="text-grayGreen font-semibold opacity-40">Copyright by Mithun C-y</h1>
      </div>
    </section>
  );
}

export default App;
