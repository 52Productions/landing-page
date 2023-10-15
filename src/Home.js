import withRoot from "./modules/withRoot";
// --- Post bootstrap -----
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./modules/views/Hero";
import Team from "./modules/views/Team";
import ContactForm from "./modules/views/ContactForm";
import Tos from "./modules/views/Tos";
import PrivacyPolicy from "./modules/views/PrivacyPolicy";



function App() {
  return (
    <Router basename={''}>
      <Switch>
      <Route path="/standup" component={() => {
          window.location.assign("https://52-productions.zoom.us/s/5277775252")
          return null
          }}/>
      <Route exact path="/tos">
          <ShowTOS />
      </Route>
      <Route exact path="/privacy">
          <ShowPrivacyPolicy />
      </Route>
      <Route  path="/">
          <Index />
      </Route>
      </Switch>
    </Router>
  );
}

function ShowPrivacyPolicy()
{
  return (
    <React.Fragment>
      <PrivacyPolicy />

    </React.Fragment>
  );
}

function ShowTOS()
{
  return (
    <React.Fragment>
      <Tos />

    </React.Fragment>
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
