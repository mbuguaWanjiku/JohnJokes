import React, { useState } from "react";
import {
  Input,
  ButtonToolbar,
  Button
} from "reactstrap";
import "./index.scss";

const JokeTextArea = props => {
  const [input, setInput] = useState(props.joke.punchline);
  //const [dropdownOpen, setDropdownOpen] = useState(true)
  const renderButtons = () => {
    if (props.isNewMode) {
      return (
        <ButtonToolbar>
          <Button
            className="hae-btn-submit"
            onClick={() => props.addJoke(input)}>
            add 
        </Button>
          <Button
            className="hae-btn-cancel"
            onClick={() => props.setMode("show")}>
            cancel
          </Button>
        </ButtonToolbar>
      );
    }
    return (
      <ButtonToolbar>
         <Button
            className="hae-btn-submit"
            onClick={() => props.updateJoke(input)}>
          update 
        </Button>
        <Button
          className="hae-btn-delete"
          onClick={() => props.deleteJoke(input)}>
          delete
        </Button>

        <Button
          className="hae-btn-cancel"
          onClick={() => props.setMode("show")}>
          cancel
        </Button>
      </ButtonToolbar>
    );
  };

  return (
    <div className="jokes-editor">
      <Input
        type="textarea"
        name="text"
        id="exampleText"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      {renderButtons()}
    </div>
  );
};

export default JokeTextArea;
