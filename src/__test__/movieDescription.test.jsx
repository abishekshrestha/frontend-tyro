import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import MovieDescription from "../components/MovieDescription/MovieDescription";

const data = {
  Title: "Star Wars",
  Year: "1977",
  Rated: "PG",
  Released: "25 May 1977",
  Runtime: "121 min",
  Genre: "Action, Adventure, Fantasy",
  Director: "George Lucas",
  Writer: "George Lucas",
  Actors: "Mark Hamill, Harrison Ford, Carrie Fisher",
  Plot: "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth ...",
  Language: "English",
  Country: "United States",
  Awards: "Won 6 Oscars. 63 wins & 29 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "8.6/10" },
    { Source: "Rotten Tomatoes", Value: "93%" },
    { Source: "Metacritic", Value: "90/100" },
  ],
  Metascore: "90",
  imdbRating: "8.6",
  imdbVotes: "1,345,096",
  imdbID: "tt0076759",
  Type: "movie",
  DVD: "06 Dec 2005",
  BoxOffice: "$460,998,507",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};

test("renders the plot, poster, actors and released", () => {
  const testTitle = "Hello world";
  const screen = render(
    <BrowserRouter>
      <MovieDescription
        title={data.Title}
        plot={data.Plot}
        cast={data.Actors}
        poster={data.Poster}
        released={data.Released}
      />
    </BrowserRouter>
  );

  const displayedImage = document.querySelector("img");

  expect(screen.getByText(data.Title)).toBeInTheDocument();
  expect(screen.getByText(`Plot: ${data.Plot}`)).toBeInTheDocument();
  expect(screen.getByText(`Actors: ${data.Actors}`)).toBeInTheDocument();
  expect(screen.getByText(`Released: ${data.Released}`)).toBeInTheDocument();
  expect(displayedImage.src).toContain(data.Poster);
});
