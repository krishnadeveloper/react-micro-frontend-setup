import React from "react";
import ReactDOM from "react-dom";
import Header from "HeaderMF/Header";
import Footer from "FooterMf/Footer";
import MainApp from "./MainApp";
import "./index.scss";

const App = () => (
  <div className="container mx-auto bg-yellow-400">
    {/* <h1>Micro Frontend setup</h1> */}
    <Header />
    <MainApp />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
