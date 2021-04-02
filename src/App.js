import { Route, Switch } from "react-router-dom";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import GlobalStyle from "./styles/global";
import { SliderData } from "./data/SliderData";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Services from "./components/Services";
import SignIn from "./components/SignIn";
import EmployeeSignIn from "./components/EmployeeSignIn";

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
                <Route exact path="/sign-in">
                    <SignIn />
                </Route>
                <Route exact path="/employeePortal">
                    <EmployeeSignIn />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
}

export default App;
