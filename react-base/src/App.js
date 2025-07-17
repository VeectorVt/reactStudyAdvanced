// This file is part of the React Base project.
import React from "react";
// import Login from "./pages/Login/Index";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  return (
    <BrowserRouter
    >
    {/* <div className="App"> */}
    <Header />
    <Routes />
    <GlobalStyles />
    {/* </div> */}
    </BrowserRouter>
  )
}

export default App;
