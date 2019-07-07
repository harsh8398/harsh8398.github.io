import React, { Component } from "react";
import ProjectCard from "./projectCard";

class Portfolio extends Component {
  state = {
    cards: [
      {
        title: "Pi Telegram Bot",
        text: "Pi is a bot made using python wrapper for telegram bot API.",
        tags: ["Python", "REST API"],
        link: "https://github.com/harsh8398/Pi-telegram-bot"
      },
      {
        title: "PyBackup",
        text:
          "PyBackup is a recursive/incremental backup package written using Python inspired by rsync. It is still under developement.",
        tags: ["Python", "Command Line Utility", "Backup"],
        link: "https://github.com/harsh8398/pybackup"
      },
      {
        title: "Simple Blogspot",
        text:
          "Simple Blogspot is a blogspot developed under django framework of python.",
        tags: ["Django", "Python", "Web"],
        link: "https://github.com/harsh8398/simple-blogspot"
      },
      {
        title: "QuizApp",
        text: "QuizApp is a programming quiz app made in android.",
        tags: ["Android", "Quiz", "UI"],
        link: "https://github.com/harsh8398/QuizApp"
      }
    ]
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="card-deck">
            {this.state.cards.map(card => {
              return (
                <ProjectCard
                  key={card.title}
                  title={card.title}
                  text={card.text}
                  tags={card.tags}
                  image={card.image}
                  link={card.link}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
