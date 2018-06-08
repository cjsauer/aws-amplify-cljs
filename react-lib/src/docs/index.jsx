import React from "react";
import { render } from "react-dom";
import TestIdea from "../../lib";
import "./styles.css";

class Demo extends React.PureComponent {
  state = {
    value: ''
  }

  render() {
    const { value } = this.state;

    return(
      <div>
        <h1>Demo with TestIdea</h1>
        <TestIdea
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        {value && <h3>hey {value}</h3>}
      </div>
    );
  }
  handleChange = value => {
    this.setState({value})
  }
  handleClick = () => {
    console.log('CLICK DISPATCHED')
  }
}

render(<Demo />, document.getElementById("app"));
