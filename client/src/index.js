import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

import Wc2022 from "./pages/events/wc2022/MainPage";
import EventManagement from "./pages/dashboard/EventManagement";
import News from "./pages/overview/News";
import Events from "./pages/overview/Events";

import "./index.css";

//components
import NavBar from "./components/Menu/Navbar";

//molecules
import Footer from "./molecules/footer";

//testing component
import App from "./App";
import ScrollTopBtn from "./molecules/scrollTopBtn";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <div style={{ position: "relative" }}>
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route
            exact
            path="/dashboard/event-management/wc2022"
            element={<Wc2022 />}
          />
          <Route
            exact
            path="/dashboard/event-management"
            element={<EventManagement />}
          />
          <Route
            exact
            path="/dashboard/account-management"
            element={<EventManagement />}
          />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/events" element={<Events />} />
        </Routes>
      </Router>
    </Provider>
    <Footer />
    <ScrollTopBtn />
  </div>,
  document.getElementById("root")
);
