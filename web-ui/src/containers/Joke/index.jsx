import React, { Component } from "react";
import JokeBadge from "../../components/jokeBadge";
import JokeTextArea from "../../components/JokeTextArea";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "show",
    };
  }

  setMode = newMode => {
    this.setState({
      mode: newMode
    });
  };

  submitJoke = () => {
    this.setMode("show");
  };
  deleteJoke = () => {
    this.setMode("show");
  };

  renderJoke() {
    console.log(this.props)
    if(this.props.joke){
    if (this.state.mode === "show" && this.props.joke) {
      return <JokeBadge  setMode={this.setMode} joke={this.props.joke}/>;
    }
    return (
      <JokeTextArea
        joke={this.props.joke}
        setMode={this.setMode}
        submitJoke={this.submitJoke}
        deleteJoke={this.deleteJoke}
      />
    );
  }
  return null
}

  render() {
    return this.renderJoke();
  }
}

export default Joke;
