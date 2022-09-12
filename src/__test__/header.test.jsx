import "@testing-library/jest-dom";
import { fireEvent, render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";

test("renders the header", () => {
  const testTitle = "Hello world";
  const mockChangeHandler = jest.fn();
  const screen = render(
    <BrowserRouter>
      <Header
        title={testTitle}
        searchInput={"default-input"}
        changeHandler={mockChangeHandler}
      ></Header>
    </BrowserRouter>
  );

  const searchInput = screen.getByTestId("search-input");
  expect(screen.getByText(testTitle)).toBeInTheDocument();
  expect(searchInput.value).toBe("default-input");
  expect(screen.getByText("Search").getAttribute("href")).toBe(
    "/movie?search=default-input"
  );
  fireEvent.change(searchInput, { target: { value: "spider" } });
  expect(mockChangeHandler).toBeCalled();
});
