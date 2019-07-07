import React, { Component } from "react";
import TimelineEvent from "./timelineEvent";

class Timeline extends Component {
  state = {
    events: [
      {
        id: "event13",
        timestamp: "July, 2019",
        title: "Recreated Portfolio Website",
        text:
          "Learned React so thought lets give this website a little revamp ;)",
        detailsArray: [],
        direction: "left"
      },
      {
        id: "event12",
        timestamp: "December, 2018",
        title: "Deep Learning Workshop at Charusat, Changa",
        text: "Gave a hands-on session.",
        detailsArray: [
          "Gave a brief introduction about different online machine learning model training platforms and explained the working of YOLO object detection."
        ],
        direction: "right"
      },
      {
        id: "event11",
        timestamp: "December, 2018",
        title: "Cresh Data Systems",
        text: "My first full time job :)",
        detailsArray: [
          "December, 2018 - Started working as an intern.",
          "May, 2019 - Started working as a Junior Software Engineer."
        ],
        direction: "left"
      },
      {
        id: "event10",
        timestamp: "September, 2018",
        title: "Hands-On Session at Silver Oak College, Ahmedabad",
        text:
          "Gave a hands-on lab about tensorflow and keras. Explained YOLO object detection algorithm.",
        detailsArray: [],
        direction: "right"
      },
      {
        id: "event9",
        timestamp: "Jan, 2018",
        title: "Deep Learning",
        text:
          "Enrolled and certified deep learning specialization by Andrew Ng.",
        detailsArray: [],
        direction: "left"
      },
      {
        id: "event8",
        timestamp: "December, 2017",
        title: "Google Developer Dayas",
        text: "Attended google developer days held at BIEC, Bangalore",
        detailsArray: [],
        direction: "right"
      },
      {
        id: "event7",
        timestamp: "October, 2017",
        title: "Introduction to Algorithm and Analysis",
        text:
          "Enrolled and successfully completed Introduction to Algorithms and Analysis by Dr. Sourav Mukhopadhyay (NPTEL).",
        detailsArray: [],
        direction: "left"
      },
      {
        id: "event6",
        timestamp: "August, 2017",
        title: "Achievement: Machine Learning",
        text:
          "Enrolled and successfully completed (being in top 1%) Machine Learning by Sudeshna Sarkar (NPTEL).",
        detailsArray: [],
        direction: "right"
      },
      {
        id: "event5",
        timestamp: "August, 2017",
        title: "Project: Portfolio",
        text: "Created this website for showcasing my Portfolio.",
        detailsArray: [],
        direction: "left"
      },
      {
        id: "event4",
        timestamp: "June, 2017",
        title: "Machine Learning",
        text:
          "Enrolled and successfully completed MOOC (Machine Learning by Andrew Ng) on Coursera.",
        detailsArray: [],
        direction: "right"
      },

      {
        id: "event3",
        timestamp: "May, 2017",
        title: "Project: Simple Blogspot",
        text:
          "Created my first simple blogspot web app using Python web framework Django.",
        detailsArray: [],
        direction: "left"
      },
      {
        id: "event2",
        timestamp: "March, 2017",
        title: "Project: PyBackup",
        text:
          "Created and worked on a project called pybackup (in Python Programming Language). It was inspired by linux command line utility called rsync.",
        detailsArray: [],
        direction: "right"
      },
      {
        id: "event1",
        timestamp: "January, 2017",
        title: "Programming, Data Structures and Algorithms Using Python",
        text:
          "Enrolled and successfully completed NPTEL Online course for Programming, Data Structures and Algorithms using Python by Madhavan Mukund.",
        detailsArray: [],
        direction: "left"
      }
    ]
  };
  render() {
    return (
      <div className="container py-2">
        {this.state.events.map(event => {
          return (
            <TimelineEvent
              key={event.id}
              id={event.id}
              timestamp={event.timestamp}
              eventTitle={event.title}
              eventText={event.text}
              eventDetailsArray={event.detailsArray}
              direction={event.direction}
            />
          );
        })}
      </div>
    );
  }
}

export default Timeline;
