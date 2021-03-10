import { Route } from "react-router-dom";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";
import { SliderData } from "./data/SliderData";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <ImageSlider slides={SliderData} />
        </div>
    );
}

export default App;
