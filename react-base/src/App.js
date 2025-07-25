// This file is part of the React Base project.
import React from "react";
// import Login from "./pages/Login/Index";
import { Router } from "react-router-dom";
import history from "./services/history";

import Routes from "./routes";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Router history={history}>

    {/* <div className="App"> */}
    <Header />
    <Routes />
    <GlobalStyles />
    {/* </div> */}
    </Router>
  )
}

export default App;
