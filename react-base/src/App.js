// This file is part of the React Base project.
import React from "react";
import { Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';

import store from "./store";

import history from "./services/history";
import Routes from "./routes";
import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
    return (
        <Provider store={store}>
            <Router history={history}>

                {/* <div className="App"> */}
                <Header />
                <Routes />
                <GlobalStyles />
                <ToastContainer autoClose={3000} className="toast-container" />
                {/* </div> */}
            </Router>
        </Provider>
    )
}

export default App;
