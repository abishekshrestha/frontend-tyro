import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { MovieCardList } from "../components/MovieList/MovieCardList";

const movies = [
  {
    thumbnailUrl: "exampleUrl",
    title: "This is a title",
    year: "2012",
    imdbID: "11111",
  },
  {
    thumbnailUrl: "exampleUrl2",
    title: "This is a title2",
    year: "2022",
    imdbID: "22222",
  },
  {
    thumbnailUrl: "exampleUrl3",
    title: "This is a title3",
    year: "2023",
    imdbID: "33333",
  },
];

test("renders movie list", () => {
  const screen = render(
    <BrowserRouter>
      <MovieCardList movies={movies} />
    </BrowserRouter>
  );

  const displayedImages = document.querySelectorAll("img");

  movies.forEach((item, index) => {
    expect(displayedImages[index].src).toContain(item.thumbnailUrl);
    expect(screen.getByText(`Year: ${item.year}`)).toBeInTheDocument();
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });
});
