import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter } from "react-router-dom";

import Header from "./components/Header";
import HomeScreen from "./components/Home";
// import AboutMe from "./components/About";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="app">
          <Header />
          <main>
            {/* <Route exact path="/About" component={AboutMe} /> */}
            {/* <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} /> */}
          </main>
          <HomeScreen />
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
