import React, { Component } from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cardImage from "../Wiretap.jpg";

class Contact extends Component {
  state = {
    email: "pharsh58@gmail.com",
    contactNo: "(+91) 8980078873"
  };
  render() {
    return (
      <div className="card mx-auto shadow" style={{ width: "18rem" }}>
        <img className="card-img-top" src={cardImage} alt="Card" />
        <div className="card-body">
          <h5 className="card-title">Contact Me</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faEnvelope} size="lg" fixedWidth />
            <a href={"mailto:" + this.state.email}>{this.state.email}</a>
          </li>
          <li className="list-group-item">
            <FontAwesomeIcon icon={faPhone} size="lg" fixedWidth />
            {this.state.contactNo}
          </li>
        </ul>
      </div>
    );
  }
}

export default Contact;
