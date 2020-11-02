import React from "react";
import Layout from "./layout/Layout";
import { AboutSection, HeroSection, Navbar } from "./components";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Switch>
          <Route>
            <HeroSection />
            <AboutSection />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
