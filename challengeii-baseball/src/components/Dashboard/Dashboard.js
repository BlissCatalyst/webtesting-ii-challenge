import React, { Component } from "react";

import Display from "../Display/Display.js";

export default class Dashboard extends Component {
  state = {
    strike: 0,
    ball: 0,
    foul: 0
  };

  render() {
    return (
      <>
        <section>
          <Display {...this.state} />
        </section>
        <section>
          <button onClick={this.strike}>Strike</button>
          <button onClick={this.ball}>Ball</button>
          <button onClick={this.foul}>Foul</button>
          <button onClick={this.reset}>Hit</button>
        </section>
      </>
    );
  }

  strike = () => {
    this.setState({ ...this.state, strike: this.state.strike + 1 });
    if (this.state.strike >= 2) {
      this.reset();
    }
  };

  ball = () => {
    this.setState({ ...this.state, ball: this.state.ball + 1 });
    if (this.state.ball >= 3) {
      this.reset();
    }
  };

  foul = () => {
    if (this.state.strike < 2) {
      this.setState({
        ...this.state,
        strike: this.state.strike + 1,
        foul: this.state.foul + 1
      });
    } else {
      this.setState({ ...this.state, foul: this.state.foul + 1 });
    }
  };

  reset = () => {
    this.setState({ ...this.state, strike: 0, ball: 0, foul: 0 });
  };
}
