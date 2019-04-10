import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders successfully", () => {
    render(<App />);
  });

  describe("STRIKES", () => {
    it("Strike Button adds 1", () => {
      const { queryByText, getByText } = render(<App />);

      const button = queryByText("Strike");

      fireEvent.click(button);
      getByText(/1/);
    });
  });

  describe("RESET", () => {
    it("Hit button resets stats to 0", () => {
      const { getByText } = render(<App />);

      const button = getByText(/hit/i);

      fireEvent.click(button);
      getByText(/strikes: 0/i);
      getByText(/balls: 0/i);
      getByText(/fouls: 0/i);
    });
  });
});
