import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/home"]} component={Home} />
      <Route exact path={["/", "/about"]} component={About} />
    </BrowserRouter>
  );
}

export default App;
