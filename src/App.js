import React, { useRef, useEffect } from "react";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BeersPage from "./pages/BeersPage";
import BrewpubPage from "./pages/BrewpubPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./components/ScrollToTop";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { gsap } from "gsap";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    gsap.from(appRef.current, {
      duration: 3,
      delay: 2,
      autoAlpha: 0,
      ease: "power3.in",
    });
  }, []);

  return (
    <div ref={appRef}>
      <ScrollToTop />
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/beers">
            <BeersPage />
          </Route>
          <Route exact path="/brewpub">
            <BrewpubPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
