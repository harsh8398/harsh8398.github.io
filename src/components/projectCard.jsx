import React, { Component } from "react";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProjectCard extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <span className="badge badge-warning">{this.props.title}</span>
          </h5>
          <p className="card-text text-monospace">{this.props.text}</p>
          <p className="card-text">
            {this.props.tags.map(tag => {
              return (
                <span key={tag} className="badge badge-info m-1">
                  {tag}
                </span>
              );
            })}
          </p>
        </div>
        <div className="card-footer">
          <a
            href={this.props.link}
            className="btn btn-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit on GitHub{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} fixedWidth />
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
