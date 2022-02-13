import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppFooter from "./modules/views/AppFooter";
import Hero from "./modules/views/Hero";
import Team from "./modules/views/Team";
import ContactForm from "./modules/views/ContactForm";

function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

function Index() {
  return (
    <React.Fragment>
      <Hero />
      <Team />
      <ContactForm />
    </React.Fragment>
  );
}

export default withRoot(App);
