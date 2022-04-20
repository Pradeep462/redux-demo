import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeComponents from "./components/CakeComponents";
import IceCreamComponent from "./components/IceCreamComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponents />
        <IceCreamComponent />
      </div>
    </Provider>
  );
}

export default App;
