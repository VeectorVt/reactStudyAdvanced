// This file is part of the React Base project.
import React from "react";
import Login from "./pages/Login/Index";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";


function App() {
  return (
    <>
    <div className="App">

      {/* <h1>Hello world! </h1> */}
    <Header />
    <Login />
    <GlobalStyles />
    </div>


    </>
  )
}

export default App;
