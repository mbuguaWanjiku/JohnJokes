import React, { Component } from "react";
import { bindActionCreators } from "redux";
import JokeBadge from "../../components/jokeBadge";
import JokeTextArea from "../../components/JokeTextArea";
import { connect } from "react-redux";
import { deleteJoke, updateJoke,addJoke } from "./actions";

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "show"
    };
  }

  setMode = newMode => {
    this.setState({
      mode: newMode
    });
  };

  addJoke = (jokePunchline) => {
    this.setMode("show");
    this.props.onAddJoke({punchline:jokePunchline});
  };

  updateJoke = (jokePunchline) => {
    this.setMode("show");
    this.props.onUpdateJoke({punchline:jokePunchline,id:this.props.joke.id});
  };

  deleteJoke = () => {
    this.setMode("show");
    this.props.onDeleteJoke(this.props.joke);
  };

  renderJoke() {
    if (this.props.joke) {
      if (this.state.mode === "show" && this.props.joke) {
        return <JokeBadge setMode={this.setMode} {...this.props} />;
      }
      return (
        <JokeTextArea
          {...this.props}
          setMode={this.setMode}
          updateJoke={this.updateJoke}
          addJoke={this.addJoke}
          deleteJoke={this.deleteJoke} />
      );
    }
    return null;
  }

  render() {
    return this.renderJoke();
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onDeleteJoke: bindActionCreators(deleteJoke, dispatch),
    onUpdateJoke: bindActionCreators(updateJoke, dispatch),
    onAddJoke: bindActionCreators(addJoke, dispatch)
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Joke);
