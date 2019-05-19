import React, { Component } from "react";
import Joke from "../Joke/";
import "./index.scss";

class Jokes extends Component {
  renderJokes() {
    const jokes = [
      {
        createdAt: "2019.05.18 10:24:36.174",
        id: "bc9c6c86-6d6e-4d90-ac15-2c34174a88ad",
        modifiedAt: "2019.05.18 10:24:36.174",
        punchline: "What do you call a famous fish? A star fish.",
        tag: ""
      },
      {
        createdAt: "2019.05.18 10:24:36.174",
        id: "bc9c6c86-6d6e-4d90-ac15-2c34174a88ad",
        modifiedAt: "2019.05.18 10:24:36.174",
        punchline: "puchline 2 33jfgfkj london. ffffffffffffffffffff ffff fffff",
        tag: ""
      }
    ];

    return jokes.map((joke, index) => {
      return <Joke key={index + joke.id} joke={joke} />;
    });
  }

  render() {
    return (
      <div>
        <div className="jokes-heading">
          <span>Punchline</span>
          <span>timespan</span>
        </div>
        {this.renderJokes()}
      </div>
    );
  }
}

export default Jokes;
