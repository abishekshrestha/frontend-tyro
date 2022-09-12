import * as React from "react";

import MovieCard, { Movie } from "components/MovieCard/MovieCard";

export const MovieCardList = ({ movies }: { movies: Movie[] }) => (
  <div className="container mx-auto p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-6">
    {movies.map((movie, index) => (
      <MovieCard key={index} {...movie} />
    ))}
  </div>
);
