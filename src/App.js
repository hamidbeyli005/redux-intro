import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import Counter from "./components/Counter";


function App() {
  return (
    <div >
      <Counter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
      <IncreaseCounter/>
    </div>
  );
}

export default App;
