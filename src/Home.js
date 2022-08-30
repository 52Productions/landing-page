import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./modules/views/Hero";
import Team from "./modules/views/Team";
import ContactForm from "./modules/views/ContactForm";


function App() {
  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
      <Route path="/standup" component={() => {
          window.location.assign("https://52-productions.zoom.us/j/83188027256")
          return null
          }}/>
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
