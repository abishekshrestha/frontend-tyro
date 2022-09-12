import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("Getflix test suite", () => {
  it("should display the home page", () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(getByText("Movie Search App")).toBeTruthy();
    expect(getByText("Go to Home Page")).toBeTruthy();
  });
});
