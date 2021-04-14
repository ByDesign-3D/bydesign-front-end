import { useState } from "react";
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
import { IoArrowUpSharp } from "react-icons/io5";

function App() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    const [isOpen, setIsOpen] = useState(false);
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollPosition = () => {
        if (!showScroll && window.pageYOffset > 500) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 500) {
            setShowScroll(false);
        }
    };

    window.addEventListener("scroll", checkScrollPosition);
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
            <IoArrowUpSharp
                className="scrollIcon"
                onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                }
                style={{ height: 40, display: showScroll ? "flex" : "none" }}
            />

            <Footer />
        </div>
    );
}

export default App;
