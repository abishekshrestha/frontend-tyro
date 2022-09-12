import axios from "axios";
import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import MovieCard, { Movie } from "components/MovieCard/MovieCard";
import { API_KEY } from "utils/api";
import { MovieCardList } from "./MovieCardList";

export const MovieList = () => {
  const { search } = useLocation();
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [nextPage, setNextPage] = React.useState(2);
  const [hasMore, setHasMore] = React.useState(true);

  const getMovieQuery = () => {
    const urlParams = new URLSearchParams(search);
    const movieQuery = urlParams.get("search") ?? "Star Wars";
    return movieQuery;
  };

  React.useEffect(() => {
    const movieQuery = getMovieQuery();

    const url = `https://www.omdbapi.com/?s=${movieQuery}&apikey=${API_KEY}`;
    setLoading(true);
    setHasMore(true);
    setNextPage(2);
    setErrorMessage("");
    axios
      .get(url)
      .then((response) => {
        setLoading(false);
        if (response?.data?.Error) {
          setErrorMessage(response?.data?.Error);
        }

        setMovies(
          response?.data?.Search.map((item: any) => ({
            title: item.Title,
            thumbnailUrl: item.Poster,
            year: item.Year,
            imdbID: item.imdbID,
          }))
        );
      })
      .catch(() => {
        setLoading(false);
      });
  }, [search]);

  const fetchMovies = (url: string) => {
    axios
      .get(url)
      .then((response) => {
        const newMovies = response?.data?.Search.map((item: any) => ({
          title: item.Title,
          thumbnailUrl: item.Poster,
          year: item.Year,
          imdbID: item.imdbID,
        }));

        setMovies((prev) => {
          return [...prev, ...newMovies];
        });
        setNextPage(nextPage + 1);
      })
      .catch(() => {
        setHasMore(false);
      });
  };

  const handleInfiniteScroll = () => {
    const movieQuery = getMovieQuery();
    const url = `https://www.omdbapi.com/?s=${movieQuery}&page=${nextPage}&apikey=${API_KEY}`;
    fetchMovies(url);
  };

  return (
    <div>
      {loading && (
        <div className="container mx-auto text-center">Loading...</div>
      )}
      {errorMessage && (
        <div className="text-red-500 font-bold text-center">{errorMessage}</div>
      )}
      <div id="infinite">
        {movies && (
          <InfiniteScroll
            dataLength={movies.length}
            next={handleInfiniteScroll}
            hasMore={hasMore}
            loader={<h4 className="text-center">Fetching new movies...</h4>}
          >
            <MovieCardList movies={movies} />
          </InfiniteScroll>
        )}
      </div>
    </div>
  );
};
