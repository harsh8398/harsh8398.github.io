import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Timeline from "./components/timeline";
import Contact from "./components/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light navbar-trans bg-transparent static-top mb-5">
          <div className="container">
            <Link to={"/"} className="navbar-brand">
              <span className="text-monospace">./Harsh Patel</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink
                    exact={true}
                    to={"/"}
                    className="nav-link"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/portfolio"} className="nav-link">
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/timeline"} className="nav-link">
                    Timeline
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/resume"} className="nav-link">
                    Resume
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/contact"} className="nav-link">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/timeline" component={Timeline} />
            <Route path="/resume" component={Resume} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
