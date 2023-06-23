import React from "react";
import { Route, Switch } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import TutorList from "./TutorList"
import Contact from "./Contact"
import TestimonialList from "./TestimonialList"

function App() {
  return (
    <div>
      <h1>App!</h1>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/tutors">
          <TutorList />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/testimonials">
          <TestimonialList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
