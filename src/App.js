import React from "react";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BeersPage from "./pages/BeersPage";
import BreweriesPage from "./pages/BreweriesPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/beers" component={BeersPage} />
          <Route path="/breweries" component={BreweriesPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
        <Footer />
      </Layout>
    </>
  );
}

export default App;
