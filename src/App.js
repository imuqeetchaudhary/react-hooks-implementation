import logo from "./logo.svg";
import "./App.css";
// import Counter from "./components/Counter";
// import Counter2 from "./components/Counter2";
// import Counter3 from "./components/Counter3";
// import Counter4 from "./components/Counter4";
// import EffectCounter1 from "./components/EffectCounter1";
// import EffectMouse from "./components/EffectMouse";
// import MouseContainer from "./components/MouseContainer";
// import DataFetching from "./components/DataFetching";
import ComponentA from "./components/ComponentA";
import { UserContext, GuestContext } from "./components/Context";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <Counter /> */}

        {/* <Counter2 /> */}

        {/* <Counter3 /> */}

        {/* <Counter4 /> */}

        {/* <EffectCounter1 /> */}

        {/* <EffectMouse /> */}

        {/* <MouseContainer /> */}

        {/* <DataFetching /> */}

        <UserContext.Provider value={`Abdul Muqeet Arshad`}>
          <GuestContext.Provider value={`Guest`}>
            <ComponentA />
          </GuestContext.Provider>
        </UserContext.Provider>
      </header>
    </div>
  );
}

export default App;
