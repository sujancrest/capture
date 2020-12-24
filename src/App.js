import React from "react";

import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";

import GlobalStyle from "./components/GlobalStyle";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AboutUs />
        </div>
    )
}


export default App;