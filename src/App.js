import React from "react";

import GlobalStyle from "./components/GlobalStyle";

import { Switch, Route } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact >
                    <AboutUs />
                </Route>
                <Route path="/work">
                    <OurWork />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
            </Switch>
        </div>
    )
}


export default App;