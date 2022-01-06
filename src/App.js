import logo from "./logo.svg";
import "./App.css";
// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
import Counter4 from "./components/Counter4";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Counter /> */}

        {/* <Counter2 /> */}

        {/* <Counter3 /> */}

        <Counter4 />
      </header>
    </div>
  );
}

export default App;
