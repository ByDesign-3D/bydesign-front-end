import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";

function App() {
    return (
        <div className="App">
          <GlobalStyle/>
            <Navbar />
            <div>
                <h1>Design 3dwrgergrgr</h1>
            </div>
        </div>
    );
}

export default App;
