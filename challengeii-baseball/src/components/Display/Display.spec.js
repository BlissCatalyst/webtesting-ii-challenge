import React from "react";
import { render } from "react-testing-library";

import Display from "./Display.js";

describe("<Display />", () => {
  it("<Display /> Renders successfully", () => {
    render(<Display />);
  });
});
