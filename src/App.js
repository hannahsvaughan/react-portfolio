import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App () {
    return (
        <div className="app">
          <Header />
          <Home />
          <AboutMe />
          <Portfolio />
          <Contact /> 
          <Footer />
        </div>
    );
  }


export default App;
