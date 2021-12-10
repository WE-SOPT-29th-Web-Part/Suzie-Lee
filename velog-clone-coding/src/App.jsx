import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/write" component={() => <Write />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
