import { Route, Switch } from "react-router-dom";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";
import { SliderData } from "./data/SliderData";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    return (
        <div className="App">
            <GlobalStyle />
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <ImageSlider slides={SliderData} />
                    <Landing />
                </Route>
                <Route exact path="/services">
                    <Services />
                </Route>
            </Switch>
            <h1>hey</h1>
            <Footer />
            
        </div>
    );
}

export default App;
