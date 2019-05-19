import React from "react";
import "./App.scss";
import "./style/index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Home from "./containers/Home";

const App = () => (
  <div className="wrapper">
    <div className="header">
      <Header />
    </div>

    <div className="contents">
      <Home />
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);
export default App;
