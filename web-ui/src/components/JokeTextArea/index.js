import React, { useState } from "react";
import { Input, ButtonToolbar, Button } from "reactstrap";
import "./index.scss";

const JokeTextArea = (props) => {
  const [input, setInput] = useState(props.joke.punchline);

  return (
    <div className="jokes-badge">
      <Input
        type="textarea"
        name="text"
        id="exampleText"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <ButtonToolbar>
        <Button className="hae-btn-submit" onClick={()=> props.submitJoke('mode')}>submit</Button>
        <Button className="hae-btn-cancel" onClick={()=> props.setMode('show')}>cancel</Button>
        <Button className="hae-btn-delete" onClick={()=> props.deleteJoke()}>delete</Button>
      </ButtonToolbar>
    </div>
  );
};

export default JokeTextArea;
