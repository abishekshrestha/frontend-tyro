import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";

test("renders movie card with poster, title and year", () => {
  const testTitle = "Hello world";
  const imageUrl = "exampleurl";
  const year = "1990";
  const imdbID = "123456";

  const screen = render(
    <BrowserRouter>
      <MovieCard
        title={testTitle}
        thumbnailUrl={imageUrl}
        year={year}
        imdbID={imdbID}
      ></MovieCard>
    </BrowserRouter>
  );

  const displayedImage = document.querySelector("img");

  expect(screen.getByText(`Year: ${year}`)).toBeInTheDocument();
  expect(screen.getByText(testTitle)).toBeInTheDocument();
  expect(displayedImage.src).toContain(imageUrl);
});
