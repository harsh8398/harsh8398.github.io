import React, { Component } from "react";
import profileImage from "../profile.png";
import Social from "./social";

class Home extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <img
          src={profileImage}
          className="rounded shadow float-left mr-5"
          alt="..."
        />
        <div className="container">
          <h1 className="display-4">Harsh Patel</h1>
          <p className="lead">
            Software Engineer, IT graduate and Machine Learning Enthusiast
          </p>
          <Social />
        </div>
      </div>
    );
  }
}

export default Home;
