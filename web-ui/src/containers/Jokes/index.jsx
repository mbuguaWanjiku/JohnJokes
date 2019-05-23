import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Joke from "./Joke";
import "./index.scss";
import { connect } from "react-redux";
import { fetchJokes, filterByCriteria } from "./actions";
import { Input } from "reactstrap";

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "filter by type"
    };
  }

  componentDidMount() {
    this.props.onFetchJokes();
  }

  renderJokes() {
    return this.props.jokes.map((joke, index) => {
      return <Joke key={index} joke={joke} />;
    });
  }
  filterByType(inputValue) {
    this.props.onFilterByCriteria({ criteria: "type", value: inputValue });
  }

  render() {
    if (this.props.jokes) {
      return (
        <div>
          <span>Number of jokes: {this.props.jokes.length}</span>
          <div className="jokes-heading">
            <span className="punchline">punchline</span>
            <Input
              className="search"
              type="text"
              name="text"
              id="exampleText"
              defaultValue={this.state.search}
              onChange={e => this.filterByType(e.target.value)}
            />
            <span className="type">type</span>
          </div>
          <div className="joke-new">
            <Joke
              key={-1}
              joke={{ id: 1, punchline: "enter new joke" }}
              isNewMode={true}
            />
          </div>
          {this.renderJokes()}
        </div>
      );
    }
    return <p>loading ..</p>;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchJokes: bindActionCreators(fetchJokes, dispatch),
    onFilterByCriteria: bindActionCreators(filterByCriteria, dispatch)
  };
};

const mapStateToProps = state => {
  let jokes = state.jokes.jokes;
  return { jokes: jokes };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jokes);
