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
  };

  ball = () => {
    this.setState({ ...this.state, ball: this.state.ball + 1 });
  };

  foul = () => {
    this.setState({ ...this.state, foul: this.state.foul + 1 });
  };

  reset = () => {
    this.setState({ ...this.state, strike: 0, ball: 0, foul: 0 });
  };
}
