import React, { Component } from "react";
import {
  // faFacebook,
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Social extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {/* <a href="#">
          <FontAwesomeIcon
            icon={faFacebook}
            size="lg"
            color="#343a40"
            fixedWidth
          />
        </a> */}
        <a
          href="https://twitter.com/iharsh8398"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            size="lg"
            color="#343a40"
            fixedWidth
          />
        </a>
        <a
          href="https://www.linkedin.com/in/harsh8398/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            size="lg"
            color="#343a40"
            fixedWidth
          />
        </a>
        <a
          href="https://github.com/harsh8398"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            size="lg"
            color="#343a40"
            fixedWidth
          />
        </a>
      </React.Fragment>
    );
  }
}

export default Social;
