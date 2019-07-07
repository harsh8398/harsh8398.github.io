import React, { Component } from "react";

class TimelineEvent extends Component {
  render() {
    if (this.props.eventDetailsArray.length > 0) {
      var eventDetails = (
        <React.Fragment>
          <button
            className="btn btn-sm btn-outline-secondary"
            type="button"
            data-target={"#" + this.props.id}
            data-toggle="collapse"
          >
            Show Details ▼
          </button>
          <div className="collapse border" id={this.props.id}>
            <div className="p-2 text-monospace">
              {this.props.eventDetailsArray.map((data, idx) => {
                return <div key={idx}>{data}</div>;
              })}
            </div>
          </div>
        </React.Fragment>
      );
    }
    const eventSpacer = <div className="col-sm">{"  "}</div>;
    const eventFragment = (
      <React.Fragment>
        <div className="col-sm-1 text-center flex-column d-none d-sm-flex">
          <div className="row h-50">
            <div className="col border-right border-dark">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
          <h5 className="m-2">
            <span className="badge badge-pill bg-dark border border-dark">
              &nbsp;
            </span>
          </h5>
          <div className="row h-50">
            <div className="col border-right border-dark">&nbsp;</div>
            <div className="col">&nbsp;</div>
          </div>
        </div>
      </React.Fragment>
    );
    const eventContent = (
      <div className="col-sm py-2">
        <div className="card border border-secondary shadow">
          <div className="card-body">
            <div className="float-right text-muted small">
              {this.props.timestamp}
            </div>
            <h4 className="card-title text-muted">{this.props.eventTitle}</h4>
            <p className="card-text">{this.props.eventText}</p>
            {this.props.eventDetailsArray.length > 0 ? eventDetails : ""}
          </div>
        </div>
      </div>
    );
    return (
      <div className="row no-gutters">
        {this.props.direction === "right"
          ? [eventSpacer, eventFragment, eventContent]
          : [eventContent, eventFragment, eventSpacer]}
      </div>
    );
  }
}

export default TimelineEvent;
