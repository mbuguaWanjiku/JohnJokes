import React from "react";
import { Badge } from "reactstrap";
import "./index.scss";

const JokeBadge = (props) => {

  const showJokeEditArea = () => {
     props.setMode("edit");
  };

  const renderBadge = () => {
    if (props.joke) {
      return (
        <div className="jokes-badge">
          <span className="joke-message">{props.joke.punchline}</span>
          <span className="joke-type">{props.joke.type}</span>
          <Badge
            className="joke-message-mode"
            onClick={() => showJokeEditArea()}
            color="secondary">
            edit
          </Badge>
        </div>
      );
    }
    return null
  };

  return renderBadge();
};

export default JokeBadge;
